# AI-driven API test generator design and pseudocode

## Design contract

**Inputs:** API specification, selected endpoint, real-route source, student ID,
and target case count.

**Outputs:** traceable candidate cases, a human-audit queue, student-extension
slots, Excel/JSON data, a Postman collection, Newman evidence, and grouped defect
candidates.

The generator treats the API specification as the expected contract and the
route implementation as execution context. A discrepancy is recorded for human
review; it never silently changes the expected result to match defective code.

```text
PROCEDURE generate_api_tests(spec, routes, endpoint, student_id, target = 35)
    contract <- parse_method_path_parameters_auth_schema_and_states(spec, endpoint)
    IF contract is incomplete THEN
        STOP with a list of missing contract fields for human resolution

    implementation <- inspect_route_handler_state_and_storage(routes, endpoint)
    discrepancies <- compare_without_overwriting_expectations(contract, implementation)

    partitions <- EMPTY SET
    FOR EACH parameter IN contract.path_query_headers_and_body_parameters DO
        partitions <- partitions UNION valid_invalid_boundary_missing_null_wrong_type(parameter)
    END FOR

    candidates <- build_cases(partitions)
    candidates <- candidates UNION authentication_and_authorization_cases(contract)
    candidates <- candidates UNION injection_idor_role_and_sensitive_data_cases(contract)
    candidates <- candidates UNION response_status_content_type_and_schema_cases(contract)
    candidates <- candidates UNION all_allowed_forbidden_repeated_and_terminal_transitions(contract)
    candidates <- deduplicate_by_precondition_input_and_expected_result(candidates)
    candidates <- prioritize_by_requirement_risk_and_uncovered_partition(candidates)

    WHILE count(candidates) < target DO
        gap <- highest_risk_uncovered_contract_rule(contract, candidates)
        IF gap does not exist THEN STOP for human review; do not invent a requirement
        candidates <- candidates UNION build_case(gap)
    END WHILE

    FOR EACH candidate IN candidates DO
        attach_case_id_origin_requirement_trace_and_automated_assertion(candidate)
        label, reason, correction <- human_audit(candidate, contract, discrepancies)
        record_original_label_and_reason(candidate, label, reason)
        IF label = INVALID OR label = INCOMPLETE THEN
            candidate <- apply_human_approved_correction(candidate, correction)
        END IF
    END FOR

    student_cases <- student_adds_at_least_five_missed_risks(candidates, discrepancies)
    final_cases <- deduplicate(candidates UNION student_cases)
    require_human_approval_for_every_final_expected_result(final_cases)

    EXPORT final_cases TO Excel review sheets AND external JSON data
    EXPORT Postman collection WITH X-Student-Id pre-request script
    RUN Newman against an isolated freshly seeded SUT
    PRESERVE raw CLI JSON JUnit AND HTML evidence, including failures

    observations <- compare_actual_responses_with_final_expectations(final_cases)
    defect_candidates <- group_failures_by_endpoint_symptom_and_probable_root_cause(observations)
    OUTPUT discrepancies, audit trail, final cases, evidence, and defect candidates
END PROCEDURE
```

## Safety and traceability invariants

- Every case traces to a contract rule, security control, transition, or recorded
  implementation discrepancy.
- `INVALID` and `INCOMPLETE` labels remain visible after correction.
- The generator never changes an expected result merely to make a failing run
  green.
- Five student-extension slots per API remain distinct from AI-origin cases.
- A failed assertion is evidence to investigate, not automatically a unique bug.

## Implementation boundary

The submitted Python script implements the export and executable-asset stages
for the three selected APIs. Parsing an arbitrary specification and proposing
new cases with an LLM remain design-level stages; the submission does not claim
that the current script is a general-purpose API-spec parser.
