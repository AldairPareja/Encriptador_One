let btnEncriptar = document.querySelector(".boton-encriptar");
let txtEncriptar = document.querySelector(".text-area");
let aviso = document.querySelector(".texto-icono");
let respuesta = document.querySelector(".mensaje_encriptado");
let contenido = document.querySelector(".mensaje");
let btnCopiar = document.querySelector(".boton-copiar");
let btnDesencriptar = document.querySelector(".boton-desencriptar");

btnEncriptar.addEventListener("click" , e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
        aviso.style.background = "#0A3871";
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit"
        contenido.remove();
    }

})
btnDesencriptar.addEventListener("click" , e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
        aviso.style.background = "#0A3871";
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit"
        contenido.remove();}

})        