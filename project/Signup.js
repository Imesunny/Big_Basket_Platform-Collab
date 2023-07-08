var signup = document.querySelector("#signup");


signup.addEventListener("submit" ,function() {
  event.preventDefault();

  var userObj = {
    name: signup.sName.value,
    email: signup.sEmail.value,
    pass: signup.sPass.value,
  };

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var existingUser = users.find(function(user){
    return user.email === userObj.email;
  });

  if (existingUser) {
    alert("User already exists!");
  } else {
    if (signup.sPass.value === signup.sPasscf.value) {
      users.push(userObj);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful");
      window.location.assign("");
    } else {
      alert("Passwords do not match");
    }
  }
});

