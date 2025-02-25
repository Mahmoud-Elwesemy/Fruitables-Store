// function getCookie(name) {
//     let cookies = document.cookie.split("; ");
//     for (let cookie of cookies) {
//         let [key, value] = cookie.split("=");
//         if (key === name) {
//             return value;
//         }
//     }
//     return null;
// }

// function login() {
//     let email  = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let rememberMe = document.getElementById("remember").checked;

//     let storedUsername = localStorage.getItem("Username");
//     let storedEmail = localStorage.getItem("Email");
//     let storedPassword = localStorage.getItem("Password");

//     let cookieEmail = getCookie("Email");
//     let cookiePassword = getCookie("Password");

//     let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");

//     emailError.textContent = "";
//     passwordError.textContent = "";

//     if (storedEmail) {
//         document.getElementById("email").value = storedEmail;
//     }
//     if (storedPassword) {
//            document.getElementById("password").value = storedPassword;
//     }

//     function validateEmail() {
//         let value = email.value.trim();
//         if (value === "") {
//             emailError.textContent = "Email is required";
//             email.parentElement.classList.add("error");
//         } else if (value !== cookieEmail) {
//             emailError.textContent = "Invalid Email";
//             email.parentElement.classList.add("error");
//         } else {
//             emailError.textContent = "";
//             email.parentElement.classList.remove("error");
//         }
//     }

//     function validatePassword() {
//         let value = password.value.trim();
//         if (value === "") {
//             passwordError.textContent = "Password is required";
//             password.parentElement.classList.add("error");
//         } else if (value !== cookiePassword) {
//             passwordError.textContent = "Invalid Password";
//             password.parentElement.classList.add("error");
//         } else {
//             passwordError.textContent = "";
//             password.parentElement.classList.remove("error");
//         }
//     }

//     email.addEventListener("input", validateEmail);
//     password.addEventListener("input", validatePassword);

//     email.addEventListener("blur", validateEmail);
//     password.addEventListener("blur", validatePassword);

//     if (email.value && password.value) {
//         if ((email.value === storedEmail || email.value === cookieEmail) &&
//             (password.value === storedPassword || password.value === cookiePassword)) {
            
//             if (rememberMe) {
//                 localStorage.setItem("Email", email.value);
//                 localStorage.setItem("Password", password.value);
//             } else {
//                 document.cookie = `Email=${email.value}; path=/`;
//                 document.cookie = `Password=${password.value}; path=/`;
//             }

//             alert("You have successfully logged in ✅");
//             window.location.href = "index.html";
//         } else {
//             alert("Incorrect email or password ❌");
//         }
//     } else {
//         alert("Please enter your email and password");
//     }
//     // if (username && password) {

//     //     if (rememberMe) {
//     //     localStorage.setItem("Email", email);
//     //     localStorage.setItem("Password", password);
//     // } else {
//     //     document.cookie = `Email=${email};`;
//     //     document.cookie = `Password=${password};`;
//     // }    
//     // alert("You have successfully Login ✅");
//     // window.location.href = "index.html"; 
//     // } else {
//     // alert("Please enter your username and password");
//     // }
// }
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

     let storedUsername = localStorage.getItem("Username");
     let storedEmail = localStorage.getItem("Email");
     let storedPassword = localStorage.getItem("Password");

     if (storedEmail)
         {
                document.getElementById("email").value = storedEmail;
                }
                  if (storedPassword)
                {
                 document.getElementById("password").value = storedPassword;
         }

function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let rememberMe = document.getElementById("remember").checked;

    let storedEmail = localStorage.getItem("Email");
    let storedPassword = localStorage.getItem("Password");

    let cookieEmail = getCookie("Email");
    let cookiePassword = getCookie("Password");

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    function validateEmail() {
        let value = email.value.trim();
        if (value === "") {
            emailError.textContent = "Email is required";
            email.parentElement.classList.add("error");
        } else if (value !== cookieEmail && value !== storedEmail) {
            emailError.textContent = "Invalid Email";
            email.parentElement.classList.add("error");
        } else {
            emailError.textContent = "";
            email.parentElement.classList.remove("error");
        }
    }

    function validatePassword() {
        let value = password.value.trim();
        if (value === "") {
            passwordError.textContent = "Password is required";
            password.parentElement.classList.add("error");
        } else if (value !== cookiePassword && value !== storedPassword) {
            passwordError.textContent = "Invalid Password";
            password.parentElement.classList.add("error");
        } else {
            passwordError.textContent = "";
            password.parentElement.classList.remove("error");
        }
    }

    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);

    email.addEventListener("blur", validateEmail);
    password.addEventListener("blur", validatePassword);

    if (email.value && password.value) {
        if ((email.value === storedEmail || email.value === cookieEmail) &&
            (password.value === storedPassword || password.value === cookiePassword)) {
            
            if (rememberMe) {
                localStorage.setItem("Email", email.value);
                localStorage.setItem("Password", password.value);
            } else {
                document.cookie = `Email=${email.value}; path=/`;
                document.cookie = `Password=${password.value}; path=/`;
            }

            alert("You have successfully logged in ✅");
            window.location.href = "shop.html";
        } else {
            alert("Incorrect email or password ❌");
        }
    } else {
        alert("Please enter your email and password");
    }
}

document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

