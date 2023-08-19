

var login = document.querySelector("#login");

login.addEventListener("submit", function() {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var loggedInUser = users.find(function(user) {
      return user.email === login.lEmail.value && user.pass === login.lPass.value;
    });
  
    if (loggedInUser) {
      alert("Login successful");
      window.location.assign("");
    } else {
      alert("Invalid credentials");
    }
  });