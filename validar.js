window.onload=function(){

const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
    form.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        parrafo.innerHTML = ""
        if(usuario.value.length < 4) {
            warnings += 'El usuario no es valido '
            entrar = true
        }
        console.log(regexEmail.test(email.value))
        if(!regexEmail.test(email.value)){
            warnings += 'El email no es valido'
            entrar = true
        }
        if(pass.value.length < 5) {
            warnings += 'La contraseña no es valida'
            entrar = true
        }
        if(entrar){
            parrafo.innerHTML = warnings

        }else{
            parrafo.innerHTML = "Enviado"

        }
    })

  }