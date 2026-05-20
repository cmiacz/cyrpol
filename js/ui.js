document.addEventListener("DOMContentLoaded", function () {
  var sourceText = document.getElementById("sourceText");
  var cyrillicText = document.getElementById("cyrillicText");
  var transcribedText = document.getElementById("transcribedText");

  sourceText.addEventListener("change", function () {
    var transcribed = transcribe(sourceText.value);
    cyrillicText.value = transliterate(transcribed);
    transcribedText.value = transcribed;
  });
});
