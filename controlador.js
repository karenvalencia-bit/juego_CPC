let calcular=document.getElementById("calcular");
let siguiente=document.getElementById("siguiente");




calcular.addEventListener("click", verificarRespuesta);
siguiente.addEventListener("click", pasarpregunta);

function verificarRespuesta(){
    
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gif=document.getElementById("gif");
    let texto=document.getElementById("texto");
    //

    

    let calcularResultado=Number(numero1)+Number(numero2);

    if(resultado==calcularResultado){
        console.log("tu respuesta esta correcta");
       
        texto.textContent="tu respuesta esta correcta";

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/xT9DPiHFM8Iy3hiC3e";


    }
    else{
        console.log("tu respuesta esta incorrecta");
       
        texto.textContent="tu respuesta esta incorrecta";

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/JT7Td5xRqkvHQvTdEu";

        


    }

    

}
function pasarpregunta() {

    let resultado=document.getElementById("resultado").value;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }


    if(resultado==""){
        texto.textContent="ojo no contestaste";

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/oZvduOsUmlsk";

    }

    else{
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
    
        let resultado=document.getElementById("resultado");
          resultado.value="";
    
        let numero1=document.getElementById("numero1");
        numero1.value=getRandomInt(1,10);
    
        let numero2=document.getElementById("numero2");
        numero2.value=getRandomInt(1,10);

    }
    
    
   
  }

