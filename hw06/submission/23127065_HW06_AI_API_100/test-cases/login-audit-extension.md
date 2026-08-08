# Login audit and extension log

- AI candidates: 35 (`LOGIN-001`–`LOGIN-035`).
- Initial audit: 34 `VALID`, one `INVALID` (`LOGIN-035`), corrected before execution.
- Extension drafts: `LOGIN-036`–`LOGIN-040` cover whitespace-only password, duplicate JSON keys, prototype-pollution-shaped input, oversized irrelevant fields, and explicit student-header evidence.
- Why omitted: the initial generation emphasized contract fields and ordinary security payloads; parser ambiguity and assignment-specific evidence needed a second pass.
- Human gate: `TODO(HUMAN): personally review every row and make 036–040 your own reasoned extensions.`
