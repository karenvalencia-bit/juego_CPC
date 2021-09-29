let contador=0;
let contadormalas=0;
let calcular=document.getElementById("calcular");
let siguiente=document.getElementById("siguiente");
let puntaje=document.getElementById("puntaje");




calcular.addEventListener("click", verificarRespuesta);
siguiente.addEventListener("click", pasarpregunta);
puntaje.addEventListener("click",calcularPuntaje);

function verificarRespuesta(){
    
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gif=document.getElementById("gif");
    let texto=document.getElementById("texto");
    //

    

    let calcularResultado=Number(numero1)+Number(numero2);

    if(resultado==calcularResultado)
    {
        console.log("tu respuesta esta correcta");

        contador++;
       
        texto.textContent="tu respuesta esta correcta";

        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/xT9DPiHFM8Iy3hiC3e";

        setTimeout (function(){
          gif.src=""
          gif.classList.remove("visible");
          gif.classList.add("invisble");
        },4000)


    }
    else{
        console.log("tu respuesta esta incorrecta");
       
        texto.textContent="tu respuesta esta incorrecta";

        contadormalas++;
        
        gif.classList.remove("invisible");
        gif.classList.add("visble");
        gif.src="https://giphy.com/embed/JT7Td5xRqkvHQvTdEu";

        setTimeout (function(){
          gif.src=""
          gif.classList.remove("visible");
          gif.classList.add("invisble");
        },2000)

        


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
  

  function calcularPuntaje(){

    let imagen=document.getElementById("gif3");
    imagen.src="https://giphy.com/embed/9xt1MUZqkneFiWrAAD";
    console.log(contador);
    let h1=document.getElementById("puntajebueno");
    let h2=document.getElementById("puntajemalo")
    h1.textContent="sacaste "+contador+" buenas";
    h2.textContent="sacaste "+contadormalas+ " malas";


  }


