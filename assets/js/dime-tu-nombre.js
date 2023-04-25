

function getNameOfClient(){
    let clientName = prompt("Ingresa tu nombre: ");

    if(clientName === null || clientName === ""){
        clientName = "... no ingresaste nada, eres Hacker?";
    }
   


    return clientName;
}

function getReferenceOfIdGreetings(){
    return document.getElementById("texto-saludo");
}

function getReferenceOfButton(){
    return document.getElementById("evento");
}

function changeGreetings(){
    //Obteniendo etiqueta H1
    const textoSaludo = getReferenceOfIdGreetings();

    //Obteniendo etiqueta de Boton
    const boton = getReferenceOfButton();

    boton.addEventListener("click", ()=>{
        let nuevoNombre =  getNameOfClient();
        textoSaludo.innerText = `${nuevoNombre}`;
    });
}

changeGreetings();