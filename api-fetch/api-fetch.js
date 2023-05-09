const btnGetUsers = document.getElementById("btn-get-users");
const apiURL = "https://reqres.in/api/users?delay=1";
const usersContainer = document.getElementById("users-container");

const getUsers = async (url) =>{
    try {
        const getResponse = await fetch(url);
        const getDataUsers = await getResponse.json();
        return getDataUsers.data;
        
    } catch (err) {
        console.log(err);
    }
}

btnGetUsers.addEventListener('click', ()=>{
    let listUsers = "";
   getUsers(apiURL)
        .then((usersArray) =>{

            usersArray.forEach(user => {
                console.log(user);
                listUsers += `
                <tr class="border p-1 my-2">
                    <td scope="row" data-label="ID">${user.id}</td>
                    <td data-label="First Name">${user.first_name}</td>
                    <td data-label="Last Name">${user.last_name}</td>
                    <td data-label="E-Mail">${user.email}</td>
                    <td class="border-bottom-0" data-label="Image"><img class="rounded-circle" width="75" src="${user.avatar}" alt=""></td>
                </tr>`;
                usersContainer.innerHTML = listUsers;
            });

        })

});

