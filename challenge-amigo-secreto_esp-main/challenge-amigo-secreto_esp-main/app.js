// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() { 
    let nombres = document.getElementById("agregarAmigo");
    let nombreIngresado = nombres.value;

    if(nombreIngresado == "") {
        alert("Por favor, ingrese un nombre");
        return;
    }

amigos.push(nombreIngresado);
console.log(amigos);
nombres.value = "";

}