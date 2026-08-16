# HW05 — Performance Testing

## 1. Thông tin sinh viên

|  |  |
| --- | --- |
| Họ và tên | NGÔ NGUYỄN THẾ KHOA |
| MSSV | 23127065 |
| Lớp | 23KTPM3 |
| Ngày thực thi | 16/08/2026, Asia/Ho_Chi_Minh |
| Công cụ | Apache JMeter 5.6.3 CLI, OpenAI Codex, Context7 MCP, Activity Monitor/`ps` |

## 2. Phạm vi và giả định

Mọi kịch bản đo cùng một workflow bao phủ đủ ba nhóm endpoint:

| Kịch bản | Workflow | Lý do profile |
| --- | --- | --- |
| Load | `POST /api/login` → `GET /api/products?search=${search}` → `POST /api/checkout` | 20 users, ramp 20 s, 120 s với think time 500–1.000 ms. |
| Stress | `POST /api/login` → `GET /api/products?search=${search}` → `POST /api/checkout` | 80 users, ramp 40 s, 120 s với think time 100–300 ms. |
| Spike | `POST /api/login` → `GET /api/products?search=${search}` → `POST /api/checkout` | 150 users, ramp 2 s, profile 60 s với pause 50 ms. |

Route và body được đối chiếu từ backend thật: cổng mặc định `3000`, các route `/api/products`, `/api/login`, `/api/checkout`; phiên kiểm thử dùng bản sao SUT cô lập ở cổng `3001` để không sửa database đang có thay đổi của checkout gốc.

## 3. Quy trình AI-first và human review

AI được hướng dẫn theo từng bước: trích rubric → đọc route backend → chọn mapping → thiết kế dữ liệu/tham số → sinh JMX → chạy smoke → sửa lỗi môi trường → chạy evidence → phân tích JTL → đối chiếu từng metric. Chi tiết prompt/output ở `AI_Audit_Report.md`.

Các điểm đã sửa sau khi rà soát:

1. Không dùng một CSV chung; tạo riêng `product-searches.csv`, `auth-credentials.csv`, `checkout-payloads.csv`.
2. Không load-test database SUT đang bẩn; chạy bản sao mới seed tại `/private/tmp`, cổng `3001`.
3. Không chấp nhận smoke log bị sandbox chặn socket (`Operation not permitted`); chạy lại ngoài sandbox và chỉ giữ JTL 0 lỗi trong submission.
4. Không chạy dashboard song song vì JMeter dùng thư mục tạm chung; evidence run được tuần tự hóa.
5. Không bật `View Results Tree` trong CLI spike vì listener này tốn tài nguyên; listener vẫn có trong plan như report view debug khác biệt, còn raw JTL/HTML dashboard được sinh bằng CLI.
6. Không gọi tổng HTTP sampler là số workflow; parent Transaction Controller là đơn vị đo workflow, còn Login/Search/Checkout được báo cáo riêng.

JMeter official best practices được truy vấn qua Context7: dùng CLI, CSV Data Set, ít listener/assertion, không dùng View Results Tree trong load run, và dùng CSV JTL cho HTML dashboard.

## 4. Thiết kế test plan

| Plan | Users | Ramp-up | Duration | Think time | CSV riêng | Listener/report type |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| `23127065_Load_20260809.jmx` | 20 | 20 s | 120 s | ngẫu nhiên 500–1.000 ms giữa bước | credentials + search + checkout | Summary Report |
| `23127065_Stress_20260809.jmx` | 80 | 40 s | 120 s | ngẫu nhiên 100–300 ms giữa bước | credentials + search + checkout | Aggregate Report |
| `23127065_Spike_20260809.jmx` | 150 | 2 s | 60 s | 50 ms giữa bước | credentials + search + checkout | View Results Tree (debug, disabled trong CLI) |

Mỗi plan có parent Transaction Controller `Workflow: Login → Search → Checkout`; Login trích/xác thực JWT, Search kiểm tra product fragment, Checkout truyền Bearer JWT và kiểm tra `orderId`. Mỗi plan tải ba CSV độc lập. Các tham số `host`, `port`, `threads`, `ramp`, `duration`, `max_response_ms` và đường dẫn CSV có thể override bằng `-J...`.

Stress chỉ dùng credential hợp lệ; do đó không phát sinh 401/403 trong evidence run và không cần reset giữa Stress/Spike. Quy trình reset khi có lockout:

```text
1. Dừng run dùng credential sai.
2. Xác nhận response 403 và tài khoản mục tiêu.
3. Trên database test cô lập:
   UPDATE users SET login_attempts = 0, locked_until = NULL WHERE email = '<test-email>';
4. Login đúng một lần, yêu cầu HTTP 200, rồi mới chạy lại.
```

## 5. Môi trường và thực thi

| Thành phần | Giá trị |
| --- | --- |
| Hostname | `LAP15045s-MacBook-Pro.local` |
| Máy | MacBook Pro (MacBookPro17,1), Apple M1, 8 cores |
| RAM | 16 GB |
| OS | macOS 26.6.1 (25G76) |
| Java | OpenJDK 26.0.2 |
| JMeter | 5.6.3 |
| Backend test | Node.js 22.23.1, Express 5.2.1, SQLite, `127.0.0.1:3000` |

Ví dụ lệnh có thể tái chạy:

```bash
JAVA_HOME=/opt/homebrew/opt/openjdk \
./agent-skill/performance-test-auditor/scripts/run-jmeter.sh \
  /opt/homebrew/bin/jmeter \
  test-plans/23127065_Load_20260809.jmx \
  results/load.jtl reports/load -Jport=3000 -Jthreads=20 -Jramp=20 -Jduration=120

JAVA_HOME=/opt/homebrew/opt/openjdk \
./agent-skill/performance-test-auditor/scripts/run-jmeter.sh \
  /opt/homebrew/bin/jmeter \
  test-plans/23127065_Spike_20260809.jmx \
  results/spike.jtl reports/spike -Jport=3000 -Jthreads=20 -Jramp=20 -Jduration=120

JAVA_HOME=/opt/homebrew/opt/openjdk \
./agent-skill/performance-test-auditor/scripts/run-jmeter.sh \
  /opt/homebrew/bin/jmeter \
  test-plans/23127065_Stress_20260809.jmx \
  results/stress.jtl reports/stress -Jport=3000 -Jthreads=20 -Jramp=20 -Jduration=120
```

## 6. Kết quả Task 1

### 6.1 Load — unified workflow

| Samples | Failures | Error | Throughput | Avg | p50 | p90 | p95 | p99 | Max |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1.460 | 0 | 0,000% | 12,174 workflow/s | 1.507,0 ms | 1.524 ms | 1.781 ms | 1.851 ms | 1.943 ms | 2.407 ms |

Nguồn: `results/load.jtl`, `results/load-summary.md`, `reports/load/index.html`.

### 6.2 Stress — unified workflow

| Samples | Failures | Error | Throughput | Avg | p50 | p90 | p95 | p99 | Max |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 5.323 | 0 | 0,000% | 44,373 workflow/s | 413,9 ms | 415 ms | 523 ms | 550 ms | 588 ms | 846 ms |

Nguồn: `results/stress.jtl`, `results/stress-summary.md`, `reports/stress/index.html`. Không có 401/403 nên evidence run không kích hoạt lockout.

### 6.3 Spike — unified workflow

| Label | Samples | Failures | Throughput | Avg | p95 | p99 | Max |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Workflow parent | 34.980 | 0 | 582,612 workflow/s | 252,5 ms | 362 ms | 552 ms | 1.061 ms |
| POST Login | 34.980 | 0 | 583,438 req/s | 33,9 ms | 84 ms | 132 ms | 617 ms |
| GET Product Search | 34.879 | 0 | 587,545 req/s | 50,2 ms | 103 ms | 180 ms | 613 ms |
| POST Checkout | 34.836 | 0 | 587,038 req/s | 62,0 ms | 123 ms | 263 ms | 613 ms |

Nguồn: `results/spike.jtl`, `results/spike-summary.md`, `reports/spike/index.html`. JTL kéo dài 60,040 s; xác nhận profile Spike 150 users / ramp 2 s / 60 s.

### 6.4 Endurance và ngưỡng phần cứng

Run 10 phút dùng plan read-heavy với 40 users, ramp-up 30 giây:

| Samples | Failures | Throughput toàn run | p95 | Max | RSS đầu | RSS max | CPU avg | CPU max |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 15.449 workflow | 0 | 25,749 workflow/s | 1.859 ms | 2.313 ms | xem `endurance-resource.csv` | xem `endurance-resource.csv` | xem `endurance-resource.csv` | xem `endurance-resource.csv` |

Endurance kéo dài 599,974 giây với 0 lỗi workflow; p95 workflow 1.859 ms. **Ngưỡng ổn định đã kiểm thử trên máy này** là 40 users / 25,749 workflow/s toàn run. Không đủ bằng chứng để gọi đây là failure threshold tuyệt đối vì chưa đẩy đến khi SUT mất ổn định.

Nguồn: `results/endurance.jtl`, `results/endurance-summary.md`, `results/endurance-resource.csv`, `reports/endurance/index.html`.

## 7. Task 2 — AI analysis và misinterpretation hunt

### 7.1 Đầu ra phân tích của AI

AI nhận định bốn run đều có error rate 0%; p95 thấp trên localhost; Spike tạo tải cao nhất; endurance không suy giảm throughput. AI đề xuất: thêm index tìm kiếm sản phẩm, bật SQLite WAL, thêm connection pool, dùng prepared statement và đặt performance gate theo p95/error rate.

### 7.2 Rà soát và sửa diễn giải

| Diễn giải AI cần sửa | Giá trị đúng từ JTL | Phán quyết |
| --- | --- | --- |
| “Spike đạt 34.980 checkout” | 34.980 là parent workflow; checkout riêng là 34.836 HTTP samples. | Sai do AI gộp workflow và request. |
| “Checkout throughput là 582,612 tx/s” | 582,612 là workflow/s; checkout riêng là 587,038 req/s. | Sai đơn vị và mẫu số. |
| “51,529 req/s là giới hạn tối đa của máy” | Đây là maximum stable **tested** trong soak 40 users; không có run đến failure point. | Kết luận vượt quá bằng chứng. |
| “RSS tăng chứng minh memory leak” | RSS tăng 72.944 → max 109.232 KiB rồi gần 108.368 KiB cuối run; cần nhiều soak/restart để kết luận leak. | Chưa đủ bằng chứng. |
| “p95 thấp nên production sẽ nhanh” | p95 Load 4 ms, Stress 3 ms, Spike 48 ms, Endurance 3 ms chỉ trên localhost, dataset nhỏ. | Thiếu tính ngoại suy môi trường. |

### 7.3 Đánh giá đề xuất tối ưu

| Đề xuất AI | Phân loại | Lý do |
| --- | --- | --- |
| Bật SQLite WAL và đo lại checkout concurrency | Khả thi, cần benchmark | Có thể cải thiện đồng thời đọc/ghi, nhưng không được tuyên bố hiệu quả trước A/B run. |
| Prepared parameter cho product search | Khả thi, ưu tiên correctness/security | Backend đang nội suy `%${searchQuery}%`; sửa giúp chống injection, nhưng không tự bảo đảm nhanh hơn. |
| Index B-tree đơn giản trên `products(name)` | Không phù hợp như mô tả | `LIKE '%term%'` có wildcard đầu nên index thường không giải quyết scan; cần đổi truy vấn/FTS và benchmark. |
| Generic connection pool cho SQLite | Hallucinated/không đủ căn cứ | SUT dùng một `sqlite3.Database`; pool kiểu client-server không tự nhiên và có thể tăng tranh chấp write. |
| Gate p95 + error rate theo baseline | Khả thi | Phù hợp CI nếu có warm-up, nhiều lần chạy và tolerance để giảm false alarm. |

## 8. Task 3 — Continuous Performance Testing proposal

```text
[Commit / Pull Request]
          |
          v
[Phân tích file thay đổi] -- chỉ docs --> [Bỏ qua + ghi lý do]
          |
          v
[Khởi tạo SUT cô lập + seed cố định]
          |
          v
[Performance smoke 2 phút]
          |
          v
[So sánh baseline cùng runner]
          |
          +-- p95 tăng >10% hoặc error >1% --> [Chạy lại xác nhận]
          |                                      |
          |                                      +-- vẫn lỗi --> [Chặn gate + artifact]
          v
[Nightly Load/Stress/Spike + weekly endurance]
          |
          v
[Lưu JTL, HTML, hardware metadata, trend]
```

Model theo dõi commit ở backend/schema/dependency/test-plan; PR dùng smoke ngắn, nightly chạy ba kịch bản, weekly chạy endurance. Gate cần so sánh cùng hardware runner, dataset, warm-up và concurrency. Ưu điểm là phát hiện p95 regression sớm; chi phí gồm runner độc quyền, thời gian và lưu artifact. False alarm đến từ noisy neighbor, cold cache, OS update hoặc dataset drift; giảm bằng median của 3 run, rerun xác nhận, tolerance 10% và không so baseline khác phần cứng. Không chạy mọi test cho docs-only commit để tiết kiệm chi phí, nhưng luôn ghi quyết định skip.

## 9. Lỗi ghi nhận

`BUG-HW05-01`: tài khoản khóa sau hai lần sai thay vì quy tắc ba lần. Đã tái hiện trên database test cô lập: hai response 401, sau đó credential đúng nhận 403; reset `login_attempts=0, locked_until=NULL` và login lại nhận 200. Xem `Bug_Report.md`.
