# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run tests:
```
npm test
```

Run a single test file:
```
node --test js/trancription.test.js
```

Open the app: open `index.html` directly in a browser (no build step needed).

## Architecture

This is a Polish-to-Cyrillic transliteration tool. The conversion pipeline in `js/trancription.js` has two stages:

1. **Transcription** (`transcriptionMap`): Normalizes Polish-specific digraphs and diacritics into a simplified phonetic form (e.g. `cz` → `č`, `sz` → `š`).
2. **Transliteration** (`transliterationMap`): Maps the normalized characters to Cyrillic glyphs (e.g. `č` → `ч`, `š` → `ш`).

Both stages use `convertText`, which splits input by spaces and applies `convertWord` on each token. `convertWord` handles case preservation (all-caps, capitalized, mixed→lowercase).

The UI (`index.html`) uses jQuery and Bootstrap 4 (loaded from CDN). On `change` of `#sourceText`, it runs both stages and updates `#cyrilicText` and `#transcribedText`.

The module exports only `convertWord` for unit testing via Node's built-in test runner (`node:test`).