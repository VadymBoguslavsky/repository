function validateForm() {
  var x = document.forms["registration"]["name"].value;
  if (x == "") {
      alert("Name must be filled out");
      return false;
  }
}