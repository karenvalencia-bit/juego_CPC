let calcular=document.getElementById("calcular");

calcular.addEventListener("click", verificarRespuesta);

function verificarRespuesta(){
    
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gif=document.getElementById("gif");
    let gif2=document.getElementById("gif2");
    let texto=document.getElementById("texto");

    

    let calcularResultado=Number(numero1)+Number(numero2);

    if(resultado==calcularResultado){
        console.log("tu respuesta esta correcta");

        gif.classList.remove("visible");
        gif.classList.add("invisible");
        
        gif2.parentNode.removeChild(gif2);
       
        texto.textContent="tu respuesta esta correcta";

        gif.classList.remove("invisible");
        gif.classList.add("visble");


    }
    else{
        console.log("ojoo")
        
        gif.classList.remove("visible");
        gif.classList.add("invisible");
        
        gif.parentNode.removeChild(gif);

        texto.textContent="ojo esta incorrecto";

        gif2.classList.remove("invisible");
        gif2.classList.add("visible");

        


    }

    

}
    

