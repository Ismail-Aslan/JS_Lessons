$(document).ready(function () {
    setTimeout(getUserList, 0);
})

// ****************GET**************************




// ****************FETCH***************


const getUserList = async () => {


    await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
       
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.data[0].id != "0") {
            console.log(data);
            for (let i = 0; i < data.data.length; i++) {
                
                $('#tbodyUserList').append(`
                
                    <tr>
                        <td>
                            <img src=${data.data[i].avatar} />
                        </td>
                        <td>
                            ${data.data[i].id}
                        </td>
                        <td>
                            ${data.data[i].email}
                        </td>
                        <td>
                            ${data.data[i].first_name}
                        </td>
                        <td>
                        ${data.data[i].last_name}
                        </td>
                    </tr>
                `)
                
            }
        }
    }).catch((err) => {
        console.log(err);
    });
}