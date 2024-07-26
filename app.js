

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}


function encriptar() {
    var inputText = document.getElementById("valorUsuario").value;
    var textoMinuscula = inputText.toLowerCase(); // Convertir texto a minúsculas
     // Mostrar el botón de copiar si hay texto guardado
     var botonCopiar = document.getElementById("botonCopiar");
     document.getElementById("botonCopiar").style.display = textoMinuscula ? "inline-block" : "none";
     var textoTransformado = textoMinuscula
     .replace(/e/g, "enter")
     .replace(/i/g, "imes")
     .replace(/a/g, "ai")
     .replace(/u/g, "ufat")
     .replace(/o/g, "ober");
     document.getElementById("textoGuardado").textContent = textoTransformado;
     
    limpiarCaja();
    
}
function copiarTexto() {
    var textoGuardado = document.getElementById("textoGuardado");
    // Seleccionar el contenido del div
    var range = document.createRange();
    range.selectNode(textoGuardado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");

}

function desencriptar() {
    var inputText = document.getElementById("valorUsuario").value;
    var textoMinuscula = inputText.toLowerCase(); // Convertir texto a minúsculas
     // Mostrar el botón de copiar si hay texto guardado
     var botonCopiar = document.getElementById("botonCopiar");
     document.getElementById("botonCopiar").style.display = textoMinuscula ? "inline-block" : "none";
     var textoTransformado = textoMinuscula
     .replace(/enter/g, "e")
     .replace(/imes/g, "i")
     .replace(/ai/g, "a")
     .replace(/ufat/g, "u")
     .replace(/ober/g, "o");
     document.getElementById("textoGuardado").textContent = textoTransformado;
    limpiarCaja();
   
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    var textareaAzul = document.getElementById('textoGuardado');
   if (textareaAzul.value.trim() === '') {
         textareaAzul.style.backgroundImage = 'url("./img/Muñeco.png")'; // Mostrar imagen de fondo inicialmente si está vacío
    } else {
        textareaAzul.style.backgroundImage = 'none'; // Ocultar imagen de fondo inicialmente si no está vacío
    };
}



 