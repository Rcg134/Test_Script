/** @format */

window.open("http://192.168.101.68:400", "_blank");

setTimeout(function () {
  var scriptElement = document.createElement("script");
  scriptElement.src = "script.js";
  document.head.appendChild(scriptElement);
}, 2000);
