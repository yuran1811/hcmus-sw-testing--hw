# Student-authored Mermaid diagram requirement

The assignment explicitly requires a self-drawn diagram and says the diagram
itself must not be AI-generated. No submission diagram has been fabricated.

## Required student artifacts

1. Create `23127065-api-test-generator.mmd` yourself using Mermaid.
2. Export the same source as `23127065-api-test-generator.png`.
3. Place both files in this directory and embed the PNG in `Main_Report.md`.
4. Record the drawing tool, drawing date, and the design decisions you made.

## Design checklist

Your diagram should express the design in `pseudocode.md`, including:

- API specification and real-route source as separate inputs;
- contract parsing and an explicit missing-contract-field stop;
- discrepancy recording without overwriting expected behavior;
- domain, security, schema, and state-transition case generation;
- coverage/deduplication and the target-case-count decision;
- the `VALID` / `INVALID` / `INCOMPLETE` human-audit gate;
- five independently reasoned student extensions;
- Excel/JSON/Postman export and the `X-Student-Id` injection point;
- isolated Newman execution, preserved evidence, and defect grouping;
- final outputs and the human approval boundary.

## Mermaid authoring notes

Current Mermaid flowcharts use `flowchart TD` or `flowchart LR`; subgraphs use
`subgraph ... end`, decisions use `{...}`, and branches can be labeled with
`-->|Yes|` / `-->|No|`. Quote labels that contain punctuation. These are syntax
notes only, not a generated submission diagram: the node grouping, layout,
decision flow, and Mermaid source must be authored by the student.
