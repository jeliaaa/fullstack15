document.getElementById("regForm").addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  if (username === "" || password === "" || email === "") {
    alert("Fill out ALL of the fields! ");
  } else if (username.length < 8) {
    alert("Your username is too short | min. 8 symbols");
  } else if (password.length < 8) {
    alert("Your password is too short | min. 8 symbols");
  } else if (!validateEmail(email)) {
    alert("Your email field is filled incorrectly");
  } else {
    alert("Your registration was succesful");
  }

  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
});
