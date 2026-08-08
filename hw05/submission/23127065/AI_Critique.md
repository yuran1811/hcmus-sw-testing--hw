# AI Critique — HW05

> **BẢN NHÁP DO AI TẠO — HUMAN REVIEW REQUIRED.** Sinh viên phải tự đọc, sửa theo trải nghiệm thật, bảo đảm phần thân 200–300 từ, rồi xóa cảnh báo này và ký xác nhận trước khi nộp.

Trong bài này, AI hỗ trợ nhanh việc trích yêu cầu, tìm endpoint thật và sinh test plan JMeter, nhưng nhiều kết luận ban đầu chỉ đúng về cú pháp chứ chưa đúng về ý nghĩa đo lường. Sai lệch rõ nhất là AI có xu hướng gọi 115.412 mẫu của Spike là 115.412 giao dịch checkout. Raw JTL cho thấy con số đó gồm 57.736 lần login và 57.676 lần checkout; vì vậy throughput tổng 1.926,166 req/s không phải throughput giao dịch checkout, vốn là 963,966 req/s. AI cũng dễ gọi 51,529 req/s của endurance là “giới hạn tối đa” dù thử nghiệm chỉ chứng minh đây là mức ổn định cao nhất đã chạy với 40 users, chưa tìm được failure point.

Một thiếu sót khác là đề xuất tối ưu mang tính khuôn mẫu. AI gợi ý B-tree index cho truy vấn `LIKE '%term%'` và connection pool cho SQLite mà chưa xét wildcard đầu chuỗi hay kiến trúc một `sqlite3.Database`. WAL đáng thử, nhưng vẫn cần A/B benchmark. Tương tự, RSS tăng từ 72.944 lên tối đa 109.232 KiB trong một soak không đủ để kết luận memory leak.

AI bỏ sót các vấn đề này vì tối ưu câu trả lời theo mẫu phổ biến và đọc metric theo nhãn tổng hợp, trong khi workflow, đơn vị, môi trường localhost và code SUT quyết định cách diễn giải. Nguyên tắc tôi rút ra là luôn truy ngược mọi nhận định về raw JTL, tách request khỏi transaction, ghi rõ phạm vi ngoại suy, và chỉ chấp nhận đề xuất sau một thí nghiệm có baseline. AI phù hợp để tăng tốc thiết kế và đặt giả thuyết; trách nhiệm xác minh, sửa sai và ký tên vẫn thuộc về người kiểm thử.

**HUMAN FILL — xác nhận:** Họ tên / ngày / chữ ký: ______________________________
