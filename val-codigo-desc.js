const btn_continuar = document.getElementById("btn-continuar");
const code = document.getElementById("code-promo");
let code_promo_txt = document.getElementById("code-promo-txt")

btn_continuar.addEventListener("click", e=>{


    if(code.value == 'NORDICO$2024$'){
        //console.log('correcto')
        code_promo_txt.innerHTML = "Codigo Valido"
    }else{
        //console.log('incorrecto')
        code_promo_txt.innerHTML = "Este codigo no existe o ya no es valido "
    }

})



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
