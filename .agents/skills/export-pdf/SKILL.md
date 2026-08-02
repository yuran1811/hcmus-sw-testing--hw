---
name: export-pdf
description: Export, refresh, or validate any repository document as a polished PDF. Use whenever a user asks for a PDF export; supports Markdown and HTML inputs, with a shortcut for the Open Social Graph English and Vietnamese task plans.
---

# Export Documents as PDF

Use this skill for every PDF-export request in this repository. It preserves the source document and any unrelated worktree changes, creates temporary rendered HTML outside the repository, and never stages output files.

## Markdown and HTML exports

For a requested Markdown or HTML source, run the script with explicit paths:

```bash
rtk .agents/skills/export-pdf/scripts/export.sh <source.md|source.html> <output.pdf> [language]
```

- Use `en` or `vi` for the optional language argument when it is known; otherwise the script infers it from the filename.
- Markdown is rendered with GitHub-flavored Markdown (`marked`) and the supplied A4 print stylesheet.
- HTML is printed directly so its existing styling remains authoritative.
- For a non-Markdown/non-HTML source, select and verify an appropriate renderer instead of relabeling a text file as PDF. Keep the same validation and visual-review steps below.

## OSG task-plan shortcut

The existing shortcut renders both fixed pairs:

- `docs/osg-sdk-tasks.en.md` → `docs/osg-tasks-en.pdf`
- `docs/osg-sdk-tasks.vi.md` → `docs/osg-tasks-vi.pdf`

Run:

```bash
rtk .agents/skills/export-pdf/scripts/export.sh --osg-task-plans
```

## Workflow

1. Confirm the requested source exists and choose the exact output path. Do not alter the source merely to export it.
2. Run the explicit source/output command above, or the OSG shortcut when both task plans are requested.
3. Verify that each output is a valid, non-empty PDF. The script performs this check for Markdown and HTML inputs.
4. Visually inspect the first page of each PDF. On macOS, generate previews with `qlmanage -t`, then use the image-viewing tool. Confirm headings, tables, language glyphs, and page edges are readable with no clipped text.
5. Run `git status --short`. If the index has a staged deletion or other pre-existing state for an output PDF, report it; do not stage, restore, or unstage files unless the user asks.

## Rendering requirements

- Keep A4 paper, compact readable tables, and internal-anchor-friendly HTML.
- For Markdown, use the supplied stylesheet. In particular, preserve `h1` wrapping: long titles must not clip at the left edge.
- Retain UTF-8 text, including Vietnamese diacritics and public iOS terms such as `Sendable`, `Keychain`, `WAL`, `Passkey`, and `UI test`.
- If Google Chrome is unavailable, stop and report the missing renderer; do not silently create a text file with a `.pdf` extension.

## Validation

Run the Markdown link checker after changing a Markdown source document. For the OSG task-plan pair:

```bash
rtk bunx markdown-link-check docs/osg-sdk-tasks.en.md
rtk bunx markdown-link-check docs/osg-sdk-tasks.vi.md
```

This skill exports documents; it does not alter their requirements, task identifiers, schedules, or content.
