# EShop Delivery Contract

## Local services

Default endpoints are backend `http://127.0.0.1:3000`, customer web `http://127.0.0.1:5173`, and admin web `http://127.0.0.1:5174`. Discover package scripts from the selected SUT instead of assuming a monorepo command. Wait for HTTP readiness before opening a browser.

If the backend uses SQLite, copy the database to a temporary file before any scenario that creates, updates, or deletes records. Restore it after all browser processes and services are stopped.

## Result and evidence contract

Each executed checklist item contains a stable ID, status, concise observation, optional bug ID, and optional evidence path. Allowed execution statuses are `Passed`, `Failed`, and `Blocked`. A blocked action must state the missing prerequisite; it is not a product failure.

Create one screenshot per failed checklist item and no screenshot for passed items unless the assignment explicitly changes this rule. A defect may group multiple failed items when they share one root behavior.

## Human-study integrity

Never fabricate participants, consent, quotes, timings, ratings, SUS responses, pilot outcomes, or personal information. Use conspicuous placeholders when the student will supply real data later. Label browser automation as `Automated technical rehearsal — not a human pilot`.

## Demonstration contract

An Agent Skill demonstration must show a complete screen or user flow, not a collection of disconnected screenshots. Include:

1. The skill invocation and selected inputs.
2. Live interaction with the running SUT.
3. The resulting status or artifact summary.
4. A local video and diagnostic trace.
5. A YouTube link, or an explicit placeholder when upload remains with the student.

Do not claim a placeholder is a published video.
