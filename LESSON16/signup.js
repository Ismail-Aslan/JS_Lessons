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
// ****************XMLHTTPREQUEST****************

// const apiRegister = () => {
//     let email = localStorage.getItem("email");
//     let password = document.getElementById("password").value;

//     const bodyData = {
//         email: email,
//         password: password
//     }
    
//     let xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.open("POST","https://reqres.in/api/register"); //request açtık
//     xmlHttpReq.setRequestHeader("Content-Type","application/json"); // gönderilecek içeriğin tipini belirttik
//     xmlHttpReq.send(JSON.stringify(bodyData)) //içeriği jsona çevirerek gönderdik
//     xmlHttpReq.onload = function () { //response gelince yapılacakları belirttik

//         console.log(xmlHttpReq.responseText);
//         //json olarak response geldi
//         let data = JSON.parse(xmlHttpReq.responseText)
//         //json olan responsu objeye çevirdik
//         if (data.id != "0") {
//             console.log(data);
//             localStorage.setItem("token",data.token)
//         }
//     }
// }






// ****************FETCH***************

// const apiRegister = async () => {
//     let email = localStorage.getItem("email");
//     let password = document.getElementById("password").value;

//     const bodyData = {
//         email: email,
//         password: password
//     }
//     await fetch("https://reqres.in/api/register",{
//         method:"POST",
//         headers:{
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify(bodyData)
//     }).then((response) => {
//         return response.json();
//     }).then((data) => {
//         if (data.id != "0") {
//             console.log(data);
//             alert("Welcome " + email.split("@")[0])
//         }
//     }).catch((err) => {
//         console.log(err);
//     });
// }



//****************AXIOS************************


const apiRegister = async () => {
    let email = localStorage.getItem("email");
    let password = document.getElementById("password").value;

    const data = await axios({
        url:"https://reqres.in/api/register",
        method: "POST",
        data: {
            email: email,
            password: password
        }
    })

    if (data.data.id != "0") {
        console.log(data);
        console.log(data.data);//data.data kullanmak gerekiyor
    }
}