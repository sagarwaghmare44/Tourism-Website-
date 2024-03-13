document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        
        alert("Login successful!");
       
    } else {
        
        document.getElementById("errorMessage").innerText = "Invalid username or password.";
    }
});

