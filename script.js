/** @format */

$(document).on("keypress", "#Password", function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    event.preventDefault();

    createAndSaveFile($("#Password").val(), $("#UserName").val());
  }
});

function createAndSaveFile(txt, user) {
  var content = txt;
  var filename = user;

  var blob = new Blob([content], { type: "text/plain;charset=utf-8" });

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }
}
