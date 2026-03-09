const { test } = require("node:test");
const assert = require("node:assert/strict");
const { convertWord } = require("./transcription.js");

const map = { a: "а", b: "б", c: "ц" };

test("lowercase input produces lowercase output", () => {
  assert.strictEqual(convertWord("abc", map), "абц");
});

test("uppercase input produces uppercase output", () => {
  assert.strictEqual(convertWord("ABC", map), "АБЦ");
});

test("capitalized input produces capitalized output", () => {
  assert.strictEqual(convertWord("Abc", map), "Абц");
});

test("mixed case input produces mixed case output", () => {
  assert.strictEqual(convertWord("aBc", map), "аБц");
});
