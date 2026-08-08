# Coverage model

For every endpoint, cover four mandatory dimensions:

- Domain partitions: valid, boundary, missing, null, empty, wrong type, oversized, and malformed input for every parameter.
- Security: missing/invalid authentication, authorization by role or ownership, injection payloads, sensitive response fields, and the applicable SEC-01 through SEC-07 controls.
- State: every allowed transition, every forbidden transition, terminal states, repeated transitions, and nonexistent resources.
- Schema: status, content type, required response keys, field types, and prohibited sensitive keys.

Each exported case must contain an ID, origin, initial audit label and reason, corrected final expectation, preconditions, input, expected status, and automated check type. A missing executable expectation is `INCOMPLETE`; a case contradicting the specification is `INVALID` until corrected.
