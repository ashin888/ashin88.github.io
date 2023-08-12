function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can customize this list of username-password pairs
    var userCredentials = {
        "ashin": "80",
        "john": "12345",
        "emma": "password123"
        // Add more username-password pairs as needed
    };

    if (userCredentials.hasOwnProperty(username) && userCredentials[username] === password) {
        window.location.replace("./Home"); // Redirect to Home page
    } else {
        alert("Username or password is incorrect");
    }
}