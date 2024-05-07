const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

const label1 = document.getElementById("l1");
const label2 = document.getElementById("l2");
const label3 = document.getElementById("l3");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    
    if(usuario.value.length > 4) {
        label1.style.border= ''; // Restablecer borde
    } else{
        warnings += 'El usuario no es valido<br>';
        entrar = true;
        label1.style.border= 'solid 1px red'; // Cambiar borde a rojo
        
    }
    
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido<br>';
        entrar = true;
        label2.style.border= 'solid 1px red'; // Cambiar borde a rojo
    } else {
        label2.style.border=  ''; // Restablecer borde
    }
    
    if(pass.value.length > 5) {
        label3.style.border=  ''; // Restablecer borde
    } else {
        warnings += 'La contraseña no es valida';
        entrar = true;
        label3.style.border= 'solid 1px red'; // Cambiar borde a rojo
        
    }
    
    if(entrar){
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
})
