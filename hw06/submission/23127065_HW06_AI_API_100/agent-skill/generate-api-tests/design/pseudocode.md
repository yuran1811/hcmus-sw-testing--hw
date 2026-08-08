# AI-driven API test generator pseudocode

```text
INPUT api_specification, real_routes, selected_endpoint, student_id

contract      <- parse endpoint method, path, parameters, auth, schema
implementation <- inspect actual handler and state/storage behavior
discrepancies <- compare(contract, implementation)

candidates <- []
FOR EACH parameter IN contract.parameters:
    candidates += domain_partitions(parameter)
candidates += authentication_and_authorization_cases(contract)
candidates += injection_and_sensitive_data_cases(contract)
candidates += response_schema_cases(contract)
candidates += all_allowed_and_forbidden_state_transitions(contract)

FOR EACH candidate IN candidates:
    label, reason <- human_audit(candidate, contract, implementation)
    IF label IS INVALID OR INCOMPLETE:
        candidate <- correct(candidate, reason)
    require traceable expected status and automated assertion

student_cases <- student_identifies_five_missed_risks(candidates, discrepancies)
final_cases <- deduplicate(candidates + student_cases)

EXPORT final_cases TO Excel and external JSON
EXPORT Postman collection WITH X-Student-Id pre-request script
RUN Newman against isolated fresh SUT
PRESERVE failures; GROUP genuine failures into defects
OUTPUT audit manifest, raw evidence, reports, and human-review fields
```
