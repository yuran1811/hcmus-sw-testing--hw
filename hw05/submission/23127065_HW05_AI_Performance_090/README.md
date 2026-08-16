# 23127065 — Ngô Nguyễn Thế Khoa — HW05

## Tự đánh giá

| STT | Tiêu chí | Điểm tối đa | Điểm sinh viên tự đánh giá |
| ---: | --- | ---: | ---: |
| 1 | Task 1 — Load testing | 20 | 20 |
| 2 | Task 1 — Stress testing | 20 | 20 |
| 3 | Task 1 — Spike testing | 20 | 20 |
| 4 | Task 2 — AI analysis + misinterpretation hunt | 10 | 10 |
| 5 | Task 3 — Continuous Performance Testing proposal (G9.6) | 10 | 10 |
| 6 | Agent Skill | 10 | 10 |
|  | **Tổng cộng** | **90** | **90** |

## Tóm tắt kiểm thử

| Kịch bản | Workflow đo | Mẫu workflow | Lỗi | Throughput workflow | p95 | Thời lượng |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Load | Login → Search → Checkout | 1.460 | 0 | 12,174 workflow/s | 1.851 ms | 119,931 s |
| Stress | Login → Search → Checkout | 5.323 | 0 | 44,373 workflow/s | 550 ms | 119,960 s |
| Spike | Login → Search → Checkout | 34.980 | 0 | 582,612 workflow/s | 362 ms | 60,040 s |
| Endurance | Login → Search → Checkout, 40 users | 15.449 | 0 | 25,749 workflow/s | 1.859 ms | 599,974 s |

Mỗi workflow gồm `POST /api/login` → `GET /api/products?search=…` → `POST /api/checkout`. Các tổng HTTP sampler không được diễn giải là số workflow hoàn thành. Spike đạt 150 users / ramp 2 s / 60,040 s và Endurance đạt 40 users / ramp 30 s / 599,974 s với 0 lỗi workflow.

## Liên kết

| Nội dung | Liên kết |
| --- | --- |
| Public repository | <https://github.com/yuran1811/hcmus-sw-testing--hw> |
| Demo Load/Stress/Spike ≥ 6 phút | [Playlist](https://www.youtube.com/playlist?list=PLU_KX-KH59Cc), [Load](https://youtu.be/Zu1hrIx2ULA), [Stress](https://youtu.be/EjeMCO551AI), [Spike](https://youtu.be/9OvaGIWIfhM) |
| Demo Agent Skill end-to-end | <https://youtu.be/wkAXVcZ2JTU> |
| GitHub Issue BUG-HW05-01 | <https://github.com/yuran1811/hcmus-sw-testing--hw/issues/31> |
