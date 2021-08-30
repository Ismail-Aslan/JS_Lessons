$(document).ready(function(){
    setTimeout(fillFormInput, 1000)
});

const fillFormInput = () => {
    let email = document.getElementById("email").value = "eve.holt@reqres.in";
    let password = document.getElementById("password").value = "pistol";
    localStorage.setItem("email", email);
}