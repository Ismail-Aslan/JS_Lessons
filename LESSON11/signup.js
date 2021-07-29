const registrationform = document.getElementById("registration_form");
registrationform.addEventListener("submit",function () {
   window.location.href = "checkout.html?firsname=" + document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value;
    
});