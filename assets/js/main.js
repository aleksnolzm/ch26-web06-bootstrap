// ------- Cambiando Texto de un H2 mediante DOM ------
const refName = document.getElementById("name");
      console.log(refName);
      refName.innerHTML = "Alekznolz <strong> HS </strong>";


// ---- Cambiando color de Texto mediante tres botones ------
function changeColorTo(colorButton){
    const refName = getRefName();
    refName.style.color = colorButton;
}

const getRefName = () => document.getElementById("name");

//----- Cambiando color de texto a si mismo mediante This ------
function changeColorParagraph(color, refObj){
    
    refObj.style.color = color;
}


//------ Reseteando todos los colores en Texto aplicados en DOM
const resetColors = function(){
    const refobjs = document.getElementsByClassName("text-color");
    console.log(refobjs);

    for (let index = 0; index < refobjs.length; index++) {
        const element = refobjs[index];
        element.style.color = "white";
    }
}


