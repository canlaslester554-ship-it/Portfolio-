 function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let title = document.getElementById("formTitle");
    let toggleText = document.querySelector(".toggle");

if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    title.innerText = "Login";
    toggleText.innerText = "Switch to Register";
} else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    title.innerText = "Register";
    toggleText.innerText = "Switch to Login";
}
}

function goToSample(event) {
    event.preventDefault();
    window.location.href = "selecting.html";
}