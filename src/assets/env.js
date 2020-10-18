(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["apiUrl"] = "${API_URL}";

  console.log('__________________');
  console.log(window["apiUrl"]);
})(this);
