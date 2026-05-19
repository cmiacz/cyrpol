---
name: cyrpol-commit
description: Commit changes in the Cyrpol codebase. Use when asked to "commit", "commit changes", "make a commit", or any git commit task in the Cyrpol project. Handles staging, commit message writing.
---

# Cyrpol Commit

## Workflow

1. Run `git status` and `git diff` (staged + unstaged) to understand all changes
3. Stage relevant files with `git add` (specific files, not `git add -A`)
4. Write a comprehensive commit message describing what changed and why
5. Run `git commit`

## Commit Message Format

Use a HEREDOC for the message:

```bash
git commit -m "$(cat <<'EOF'
Short summary of changes

Detailed description of what was changed and why.
List specific modifications when multiple files are affected.

EOF
)"
```
