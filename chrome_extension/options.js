

var GoDaddy = "https://TODO.GODADDY.URL/%s";

function toggle(radioButton) {
  if (window.localStorage == null) {
    alert('Local storage is required for changing providers');
    return;
  }
  if (document.getElementById('GoDaddy').checked) {
    window.localStorage.customStealSite = GoDaddy;
  } else {
    window.localStorage.customStealSite = "";
  }
}

function main() {
  if (window.localStorage == null) {
    alert("LocalStorage must be enabled for changing options.");
    document.getElementById('default').disabled = true;
    document.getElementById('GoDaddy').disabled = true;
    return;
  }

  if (window.localStorage.customStealSite == GoDaddy)
    document.getElementById('GoDaddy').checked = true;
}

document.addEventListener('DOMContentLoaded', function () {
  main();
  document.querySelector('#default').addEventListener('click', toggle);
  document.querySelector('#GoDaddy').addEventListener('click', toggle);
});
