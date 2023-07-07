// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the signup form element
    var signupForm = document.getElementById('signup');
  
    // Get the login form element
    var loginForm = document.getElementById('login');
  
    // Add event listener to the signup form submission
    signupForm.addEventListener('submit', function() {
      event.preventDefault(); // Prevent form submission
  
      // Get the input values
      var fullName = document.getElementById('sName').value;
      var email = document.getElementById('sEmail').value;
      var password = document.getElementById('sPass').value;
      var confirmPassword = document.getElementById('sPasscf').value;
  
      // Validate the input values (you can add more validation logic)
      if (fullName.trim() === '') {
        alert('Please enter your full name.');
        return;
      }
  
      if (email.trim() === '') {
        alert('Please enter your email.');
        return;
      }
  
      if (password.trim() === '') {
        alert('Please enter a password.');
        return;
      }
  
      if (confirmPassword.trim() === '') {
        alert('Please confirm your password.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      // Store the signup data in local storage
      var userData = {
        fullName: fullName,
        email: email,
        password: password
      };
  
      localStorage.setItem('userData', JSON.stringify(userData));
  
      // Perform further actions here, such as sending the data to a server
      // or redirecting to a new page.
      // Example:
      console.log('Signup form submitted successfully.');
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    });
  
    // Add event listener to the login form submission
    loginForm.addEventListener('submit', function() {
      event.preventDefault(); // Prevent form submission
  
      // Get the input values
      var email = document.getElementById('lEmail').value;
      var password = document.getElementById('lPass').value;
  
      // Validate the input values (you can add more validation logic)
      if (email.trim() === '') {
        alert('Please enter your email.');
        return;
      }
  
      if (password.trim() === '') {
        alert('Please enter your password.');
        return;
      }
  
      // Retrieve the signup data from local storage
      var storedUserData = localStorage.getItem('userData');
  
      if (storedUserData === null) {
        alert('No user found. Please register first.');
        return;
      }
  
      // Parse the stored user data
      var userData = JSON.parse(storedUserData);
  
      // Validate the login credentials
      if (email === userData.email && password === userData.password) {
        // Successful login
        console.log('Login successful.');
        console.log('Email:', email);
        console.log('Password:', password);
      } else {
        // Invalid login credentials
        alert('Invalid login credentials. Please try again.');
      }
    });
  });
  