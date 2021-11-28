const transcriptionMap = {
  ą: "ų",
  cz: "č",
  rz: "ř",
  sz: "š",
  w: "v",
  ż: "ž",

  di: "dy",
  ti: "ty",

  ść: "st'",
  ści: "sti",
  śl: "sl",
  śmi: "smi",
  śń: "sn'",
  śni: "sni",
  śvi: "svi",
  źdź: "zd'",
  ździ: "zdi",

  dź: "d'",
  ć: "t'",
  ń: "n'",
  ś: "s'",
  ź: "z'",

  ci: "ti",
  dzi: "di",

  ie: "ě",

  cj: "ci",
};

const transliterationMap = {
  qu: "kv",
  q: "k",
  wh: "v",
  ph: "f",
  x: "ks",
  ch: "x",

  lě: "łie",
  le: "łě",
  li: "łi",

  a: "a",
  b: "б",
  c: "ц",
  č: "ч",
  d: "д",
  e: "е",
  ę: "я",
  ě: "є",
  f: "ф",
  g: "г",
  h: "ғ",
  i: "і",
  j: "ј",
  k: "к",
  l: "ль",
  ł: "л",
  m: "м",
  n: "н",
  o: "о",
  ó: "ӧ",
  p: "п",
  q: "к",
  r: "р",
  ř: "ԗ",
  s: "с",
  š: "ш",
  t: "т",
  u: "у",
  ų: "ѫ",
  v: "в",
  w: "в",
  x: "х",
  y: "и",
  z: "з",
  ž: "ж",

  шч: "щ",
  "'": "ь",
};

const transcribe = (source) => convertText(source, transcriptionMap);

const transliterate = (source) => convertText(source, transliterationMap);

const convertText = (source, convertionMap) =>
  source
    .split(" ")
    .map((word) => convertWord(word, convertionMap))
    .join(" ");

const convertWord = (source, convertionMap) => {
  var result = source.toLowerCase();
  Object.entries(convertionMap).forEach(([sequence, replacement]) => {
    result = result.replaceAll(sequence, replacement);
  });

  if (source === source.toLowerCase()) return result;
  if (source === source.toUpperCase()) return result.toUpperCase();
  if (source.charAt(0) === source.charAt(0).toUpperCase())
    return result.charAt(0).toUpperCase() + result.slice(1);

  return result;
};

function handleTextChange() {
  var source = $(this).val();
  var transcribed = transcribe(source);
  var cyrilic = transliterate(transcribed);

  $("#cyrilicText").empty().append(cyrilic);
  $("#transcribedText").empty().append(transcribed);
}

$(document).ready(function () {
  $("#sourceText").change(handleTextChange);
});
