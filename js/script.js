var input = document.getElementById("input");
var divImagen = document.getElementById('imagencontenido');
var divContenido = document.getElementById('flotante');

function encriptar() {
    divContenido.style.display = '';
    divImagen.style.display = 'none';
    input = document.getElementById("input").value;//obtenemos el valor del input
    let encriptado =  input.replace(new RegExp("i", 'g'), "imes").replace(new RegExp("a", 'g'), "ai").replace(new RegExp("er", 'g'), "ente").replace(new RegExp("o", 'g'), "ober").replace(new RegExp("u", 'g'), "ufat");
    texto = document.getElementById("ventana1");//obtenemos el elemento donde se va a mostrar el texto
    texto.innerHTML = encriptado;//mostramos el texto encriptado
}
function desencriptar() {
    divContenido.style.display = '';
    divImagen.style.zIndex = '-1';
    document.getElementById("ventana1").innerHTML = "";
    let input = document.getElementById("input").value;
    let desencriptado = input.replace(new RegExp("imes", 'g'), "i").replace(new RegExp("ai", 'g'), "a").replace(new RegExp("enter", 'g'), "e").replace(new RegExp("ober", 'g'), "o").replace(new RegExp("ufat", 'g'), "u");
    texto = document.getElementById("ventana1");
    texto.innerHTML = desencriptado;
}
function borrar() {
    document.getElementById("input").value = "";
    document.getElementById("ventana1").innerHTML = "";
    document.getElementById('textarea').innerHTML = "";
    document.getElementById('imagencontenido').style.display = 'block';
}
function copiar() {
var contenido = document.getElementById('ventana1');
contenido.select();
document.execCommand('copy');
}
