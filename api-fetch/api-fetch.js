const btnGetUsers = document.getElementById("btn-get-users");
const apiURL = "https://reqres.in/api/users?delay=3";
const usersContainer = document.getElementById("users-container");
const loader = document.getElementById("loader");
const oneMinuteDelay = 60000;
let dueFetchTime = 0;
let errorOnServer = false;

const startLoader = () => {
    loader.innerHTML = ` <div class="spinner-border text-light" role="status"></div>`;
}

const endLoader = () => {
    loader.innerHTML = ``;
}

const printUsers = (users) => { 
    let listUsers = "";
    users.forEach((user) => {
        //console.log(user);
        listUsers += `
        <tr class="border p-1 my-2">
            <td scope="row" data-label="ID">${user.id}</td>
            <td data-label="First Name">${user.first_name}</td>
            <td data-label="Last Name">${user.last_name}</td>
            <td data-label="E-Mail">${user.email}</td>
            <td class="border-bottom-0" data-label="Image"><img class="rounded-circle" width="75" src="${user.avatar}" alt=""></td>
        </tr>`;
              
    });
    usersContainer.innerHTML = listUsers;
}

const printErrorServer = () => {
    let errorMessage = "No se pudo cargar los datos";
    loader.innerHTML = `<h4 class="text-center text-danger">${errorMessage}</h4>`;
}

const getUsers = async (url) =>{
    try {
        const getResponse = await fetch(url);
        const getDataUsers = await getResponse.json();
        return getDataUsers.data;
        
    } catch (err) {
        return err;
    }
}

btnGetUsers.addEventListener('click', ()=>{
    
    let timeNow = new Date().getTime();
    
    if(timeNow <= dueFetchTime && errorOnServer!== true){
        const usersObject = JSON.parse(localStorage.getItem("usersList"));
        printUsers(usersObject);
        console.log("Loaded from LocalStorage");
    }
    else{
        startLoader();
        getUsers(apiURL)
            .then((usersArray) =>{
            
                dueFetchTime = (new Date().getTime() + oneMinuteDelay);
                localStorage.setItem("usersList", JSON.stringify(usersArray));
                printUsers(usersArray);
                endLoader();
                errorOnServer = false;
                console.log("Loaded from Server");
        })
            .catch((err)=>{
                errorOnServer = true;
                console.log(err);
                endLoader();
                printErrorServer();
            })
    }
});

