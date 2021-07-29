const registrationform = document.getElementById("registration_form");
registrationform.addEventListener("submit",function (e) {
    e.preventDefault();

   //window.location.href = "checkout.html?firsname=" + document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value;

   alert(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value);
   
});


const lastNameInput = document.getElementsByName("last_name")[0];
const remainCharSpan = document.getElementById("charCount")