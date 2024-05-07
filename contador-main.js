const contador = document.getElementById("Contar");
const sumar = document.getElementById("Incremento");
const restar = document.getElementById("Decremento");
const reseteo = document.getElementById("Reseteo");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

});

reseteo.addEventListener("click", ()=>{
    numero=0;
    contador.innerHTML = numero;
});