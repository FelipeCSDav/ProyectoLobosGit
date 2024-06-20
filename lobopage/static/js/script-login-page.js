//Validando formularios Login de iniciar sesion
$(document).ready(function() {

    $("#form").submit(function(e) {
       
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //Formato gmail
        
        /*Usuario*/
        if($("#email").val() === ""){
            $("#warningGmail").html('El usuario es requerido');
            $("#labelGmail").css("border", "solid 1px red"); 
            e.preventDefault()
        } else {
            $("#labelGmail").css("border", "");
            $("#warningGmail").html('');
        }


        /*Contraseña*/ 
        if($("#password").val() == ""){
            $("#warningPass").html('La contraseña es requerida');
            $("#labelPass").css("border", "solid 1px red"); 
            e.preventDefault()
        } else {
            $("#labelPass").css("border", ""); 
            $("#warningPass").html('');
        }
        

        /*En caso de Gmail*/ 
        /*if($("#email").val() === ""){
            $("#warningGmail").html('El correo es requerido');
            $("#labelGmail").css("border", "solid 1px red"); 
            e.preventDefault()
        } else if(!regexEmail.test($("#email").val())){
            $("#warningGmail").html('El correo no es valido');
            $("#labelGmail").css("border", "solid 1px red");
            e.preventDefault()
        } else {
            $("#labelGmail").css("border", "");
            $("#warningGmail").html('');
        }*/
    });
});

//Validando formularios Registro
$(document).ready(function() {

    $("#form2").submit(function(e) {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; // Formato de correo electrónico
        
        /* Usuario */ 
        if ($("#id_username").val() === "") {
            $("#warningUser").html('El usuario es requerido');
            $("#labelUser").css("border", "solid 1px red");
            e.preventDefault();
        } else if ($("#id_username").val().length < 4 || $("#id_username").val().length > 20) {
            $("#warningUser").html('El campo debe tener entre 4 y 20 caracteres');
            $("#labelUser").css("border", "solid 1px red");
            e.preventDefault();
        } else {
            // Resetear el borde y los warnings
            $("#labelUser").css("border", "");
            $("#warningUser").html('');
        }   
    
        /* Correo */ 
        if ($("#id_email").val() === "") {
            $("#warningEmail").html('El correo es requerido');
            $("#labelEmail").css("border", "solid 1px red"); 
            e.preventDefault();
        } else if (!regexEmail.test($("#id_email").val())) {
            $("#warningEmail").html('El correo no es válido');
            $("#labelEmail").css("border", "solid 1px red"); 
            e.preventDefault();
        } else {
            $("#labelEmail").css("border", "");
            $("#warningEmail").html('');
        }

        /* Contraseña 1 */ 
        if ($("#id_password1").val() === "") {
            $("#warningPass1").html('La contraseña es requerida');
            $("#labelPass1").css("border", "solid 1px red");
            e.preventDefault();
        } else if ($("#id_password1").val().length < 8 || $("#id_password1").val().length > 25) {
            $("#warningPass1").html('La contraseña debe tener entre 8 y 25 caracteres');
            $("#labelPass1").css("border", "solid 1px red");
            e.preventDefault();
        } else {
            $("#labelPass1").css("border", ""); 
            $("#warningPass1").html('');
        }

        /* Contraseña 2 */ 
        if ($("#id_password2").val() === "") {
            $("#warningPass2").html('Confirmar contraseña es requerido');
            $("#labelPass2").css("border", "solid 1px red");
            e.preventDefault();
        } else if ($("#id_password1").val() !== $("#id_password2").val()) {
            $("#warningPass2").html('Las contraseñas no coinciden');
            $("#labelPass1").css("border", "solid 1px red");
            $("#labelPass2").css("border", "solid 1px red");
            e.preventDefault();
        } else {
            $("#labelPass1").css("border", ""); 
            $("#labelPass2").css("border", ""); 
            $("#warningPass2").html('');
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
