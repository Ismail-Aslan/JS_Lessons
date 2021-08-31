// $(document).ready(function () {
//     setTimeout(getUserList, 0);
// })

$(document).ready(function () {
    setTimeout(getApiUserList, 1000);
    // setInterval(getApiUserList, 5000);
})
// ****************GET**************************




// ****************FETCH***************


// const getUserList = async () => {


//     await fetch("https://reqres.in/api/users?page=2",{
//         method:"GET",
       
//     }).then((response) => {
//         return response.json();
//     }).then((data) => {
//         if (data.data[0].id != "0") {
//             console.log(data);
//             for (let i = 0; i < data.data.length; i++) {
                
//                 $('#tbodyUserList').append(`
                
//                     <tr>
//                         <td>
//                             <img src=${data.data[i].avatar} />
//                         </td>
//                         <td>
//                             ${data.data[i].id}
//                         </td>
//                         <td>
//                             ${data.data[i].email}
//                         </td>
//                         <td>
//                             ${data.data[i].first_name}
//                         </td>
//                         <td>
//                         ${data.data[i].last_name}
//                         </td>
//                     </tr>
//                 `)
                
//             }
//         }
//     }).catch((err) => {
//         console.log(err);
//     });
// }



//****************AXIOS************************




// const getUserList = async () => {
//     const response = await axios({
//         url: 'https://reqres.in/api/users?page=1',
//         method: 'GET'
//     });
//     console.log(response);
//     if (response.data.data.id != "0") {
//         for (let i = 0; i < response.data.data.length; i++) {
//             $("#tbodyUserList").append(`
//                     <tr>
//                             <td>
//                             <img src="${response.data.data[i].avatar}"/>
//                             </td>
//                             <td>
//                             ${response.data.data[i].id}
//                             </td>
//                             <td>
//                             ${response.data.data[i].email}
//                             </td>
//                             <td>
//                             ${response.data.data[i].first_name}
//                             </td>
//                             <td>
//                             ${response.data.data[i].last_name}
//                             </td>
//                      </tr>`)
//         }
//     }
// }

//***************************AJAX**************************



// const getUserList = () => {
//     $.ajax({
//         type: "GET",
//         url: "https://reqres.in/api/users?page=1",
//         dataType: 'json',
//         success: function (data) {
//             if (data != "") {
//                 for (var i = 0; i < data.data.length; i++) {
//                         $('#tbodyUserList').append(
//                             `<tr>
//                                     <td>
//                                         <img src="${data.data[i].avatar}"/>
//                                     </td>
//                                     <td>
//                                         ${data.data[i].id}
//                                     </td>
//                                     <td>
//                                         ${data.data[i].email}
//                                     </td>
//                                     <td>
//                                         ${data.data[i].first_name}
//                                     </td>
//                                     <td>
//                                         ${data.data[i].first_name}
//                                     </td>
//                             </tr>`);
//                 }
//             }
//             else {
//                 console.log("getApiUserList ajax send request nodata");
//             }
//         },
//         beforeSend: function (request) {
//             // request.setRequestHeader("token", localStorage.getItem("token"));
//             document.getElementById("loading").style.display = "block";
//             // console.log("getApiUserList ajax send request before");
//         },
//         complete: function () {
//             console.log("getApiUserList ajax send request finished");
//             document.getElementById("loading").style.display = "none";

//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             document.getElementById("loading").style.display = "none";
//             // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown);

//             if (XMLHttpRequest.readyState == 4) {
//                 // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
//             }
//             else if (XMLHttpRequest.readyState == 0) {

//             }
//             else {
//                 // network problem
//             }

//         }
//     });
// }

//************DATA TABLE**************** */



const getApiUserList = () => {
    $("#example").DataTable({
      ajax: {
        url: "https://reqres.in/api/users?page=1",
        dataSrc: "data",
      },
      type: "GET",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      columns: [
  
        {
          data: "id",
        },
        {
          data: "email",
        },
        {
          data: "first_name",
        },
        {
          data: "last_name",
        },
      ],
    });
  }