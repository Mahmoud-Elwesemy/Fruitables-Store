
function validateUsername() {
    let value = username.value.trim();
    if (value === "" || value.length < 3) {
        usernameError.textContent = value === "" ? "Username is required" : "Username must be at least 3 characters";
        username.parentElement.classList.add("error"); 
    } else {
        usernameError.textContent = "";
        username.parentElement.classList.remove("error"); 
    }
}

function validateEmail() {
    let value = email.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "" || !emailPattern.test(value)) {
        emailError.textContent = value === "" ? "Email is required" : "Enter a valid email address";
        email.parentElement.classList.add("error");
    } else {
        emailError.textContent = "";
        email.parentElement.classList.remove("error");
    }
}

function validatePassword() {
    let value = password.value.trim();
    let passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d@$!%*?&]{8,}$/;
    if (value === "" || !passwordPattern.test(value)) {
        passwordError.textContent = value === "" ? "Password is required" : "Password must be at least 8 characters long and contain both letters and numbers";
        password.parentElement.classList.add("error");
    } else {
        passwordError.textContent = "";
        password.parentElement.classList.remove("error");
    }
}

function validateConfirmPassword() {
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmpassword.value.trim();

    if (confirmPasswordValue === "" || confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = confirmPasswordValue === "" ? "Confirm Password is required" : "Passwords do not match";
        confirmpassword.parentElement.classList.add("error");
    } else {
        confirmPasswordError.textContent = "";
        confirmpassword.parentElement.classList.remove("error");
    }
}


username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmpassword.addEventListener("input", validateConfirmPassword);


username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmpassword.addEventListener("blur", validateConfirmPassword);


function Register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rememberMe = document.getElementById("remember").checked;

    if (username && email && password) {
    if (rememberMe) {
        localStorage.setItem("Username", username);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
    } else {
        document.cookie = `Username=${username};`;
        document.cookie = `Email=${email};`;
        document.cookie = `Password=${password};`;
        localStorage.setItem("Username", username);
    }    
    alert("You have successfully registered ✅");
    window.location.href = "Login.html"; 
    } else {
    alert("Please enter valid data.");
    }
}
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    let ConpPassFild= document.getElementById("confirmpassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        ConpPassFild.type="text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        ConpPassFild.type="password"
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});
