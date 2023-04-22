console.log("Helo desde archivo externo");

// --- Cambiando Texto de color con botones
function changeColorTo(colorButton){
    const refName = getRefName();
    refName.style.color = colorButton;
}

const getRefName = () => document.getElementById("name");

//-- Cambiando color de texto a si mismo
function changeColorParagraph(color, refObj){
    
    refObj.style.color = color;
}

const resetColors = function(){
    const refobjs = document.getElementsByClassName("text-color");
    console.log(refobjs);

    for (let index = 0; index < refobjs.length; index++) {
        const element = refobjs[index];
        element.style.color = "purple";
    }
}