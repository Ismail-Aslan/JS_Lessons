$(document).ready(function(){
    setTimeout(fillFormInput, 1000)
}); // aşağıdaki yorum satırlarında yazan işlemin aynısı
// window.onload = function(){
//     setTimeout(fillFormInput, 1000)
// };


const fillFormInput = () => {
    let email = document.getElementById("email").value = "eve.holt@reqres.in";
    let password = document.getElementById("password").value = "pistol";
    localStorage.setItem("email", email);

    
}
const apiRegister = () => {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password").value;

    const bodyDate = {
        email: email,
        password: password
    }
    
}