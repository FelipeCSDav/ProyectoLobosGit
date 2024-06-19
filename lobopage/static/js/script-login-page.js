//Validando formularios Login de iniciar sesion
$(document).ready(function() {

    $("#form").submit(function(e) {
       

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //Formato gmail
        
        //labelUser y los otros labels son para cambiar el color del borde
         
        /*Gmail*/ 
        if($("#email").val() === ""){
            $("#warningGmail").html('El correo es requerido');
            $("#labelGmail").css("border", "solid 1px red"); 
        } else if(!regexEmail.test($("#email").val())){
            $("#warningGmail").html('El correo no es valido');
            $("#labelGmail").css("border", "solid 1px red"); 
        } else {
            $("#labelGmail").css("border", "");
            $("#warningGmail").html('');
        }

        /*Contraseña*/ 
        if($("#password").val() == ""){
            $("#warningPass").html('La contraseña es requerida');
            $("#labelPass").css("border", "solid 1px red"); 
        } else if($("#password").val().length < 8 || $("#password").val().length > 25) {
            $("#warningPass").html('La contraseña debe tener entre 8 y 25 caracteres');
            $("#labelPass").css("border", "solid 1px red"); 
        } else {
            $("#labelPass").css("border", ""); 
            $("#warningPass").html('');
        }
        
    });
});

//Validando formularios Login de crear cuenta
$(document).ready(function() {

    $("#form2").submit(function(e) {
        e.preventDefault();

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //Formato gmail
        
        //labelUser y los otros labels son para cambiar el color del borde
        
        /*Usuario*/ 
        if ($("#usuario").val() === "") {
            $("#warningUser").html('El nombre es requerido');
            $("#labelUser").css("border", "solid 1px red");
        } else if ($("#usuario").val().length < 4 || $("#usuario").val().length > 20) {
            $("#warningUser").html('El campo debe tener entre 4 y 20 caracteres');
            $("#labelUser").css("border", "solid 1px red");
        } else {
            // Resetear el borde y los warnings
            $("#labelUser").css("border", "");
            $("#warningUser").html('')
        }

        
        /* Rut */ 
        if ($("#rut").val() === "") {
            $("#warningRut").html('El rut es requerido');
            $("#labelRut").css("border", "solid 1px red");
        } else if (!/^\d{7,8}-[\dkK]$/.test($("#rut").val())) {
            $("#warningRut").html('Rut sin puntos 99.999.999-9');
            $("#labelRut").css("border", "solid 1px red");
        } else {
            $("#labelRut").css("border", "");
            $("#warningRut").html('');
        }
        
    
        /*Gmail*/ 
        if($("#email").val() === ""){
            $("#warningGmail").html('El correo es requierido');
            $("#labelGmail").css("border", "solid 1px red"); 
        } else if(!regexEmail.test($("#email").val())){
            $("#warningGmail").html('El correo no es valido');
            $("#labelGmail").css("border", "solid 1px red"); 
        } else {
            $("#labelGmail").css("border", "");
            $("#warningGmail").html('');
        }

        /*Contraseña*/ 
        if($("#password").val() == ""){
            $("#warningPass").html('La contraseña es requierida');
            $("#labelPass").css("border", "solid 1px red"); 
        } else if($("#password").val().length < 8 || $("#password").val().length > 25) {
            $("#warningPass").html('La contraseña debe tener entre 8 y 25 caracteres');
            $("#labelPass").css("border", "solid 1px red"); 
        } else {
            $("#labelPass").css("border", ""); 
            $("#warningPass").html('');
        }
        
    });
});





//Version sin JQUERY

/* const usuario = document.getElementById("usuario");
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
}) */
