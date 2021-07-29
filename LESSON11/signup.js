const registrationform = document.getElementById("registration_form");
registrationform.addEventListener("submit",function (e) {
    e.preventDefault();

   window.location.href = "checkout.html?firsname=" + document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value;

   //alert(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value);
   
});


const lastNameInput = document.getElementsByName("last_name")[0];
const remainCharSpan = document.getElementById("charCount");

const showRemainChar = () => {
    remainCharSpan.innerText = lastNameInput.value.length + "/40";
    if (lastNameInput.value.length > 0) {
        remainCharSpan.style.visibility = "visible";
    } else {
        remainCharSpan.style.visibility = "hidden";
    }
};
lastNameInput.addEventListener("keyup",showRemainChar);


let birthday = document.getElementsByName("birthday")[0];

birthday.addEventListener("change", () => {
    alert(new Date(birthday.value).toLocaleDateString() + " date is selected!");
    
});

let email = document.getElementsByName("email")[0];

const validateEmail = () => {
    
    let errorSpan = document.querySelector("#errorSpan");

    const regexPattern = /\S+\@+\S+\.+\S/;
    if (!regexPattern.test(email.value)) {
        errorSpan.innerHTML = "Invalid email address!";
        errorSpan.style.color = "red";
    } else {
        errorSpan.innerHTML = "Valid email address!";
        errorSpan.style.color = "green";
    }
    if (email.value.length > 0) {
        errorSpan.style.visibility = "visible";
    } else {
        errorSpan.style.visibility = "hidden";
    }
}

email.addEventListener("keyup",validateEmail);