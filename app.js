// Lista donde guardamos los nombres de los amigos
let amigos = [];

// Esta función agrega un amigo a la lista cuando el usuario hace click en "Añadir"
function agregarAmigo() {
    // Obtenemos lo que escribió el usuario
    let nombre = document.getElementById('amigo').value;
    
    // Si no escribió nada, le decimos que escriba un nombre
    if (nombre === '') {
        alert('Por favor ingrese un nombre.');
        return;
    }
    
    // Agregamos el nombre a nuestra lista
    amigos.push(nombre);
    
    // Borramos lo que está escrito en el input
    document.getElementById('amigo').value = '';
    
    // Mostramos la lista actualizada
    mostrarAmigos();
}

// Permitir agregar nombres cuando presiona Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Esta función muestra todos los amigos en la pantalla
function mostrarAmigos() {
    // Obtenemos el lugar donde vamos a mostrar la lista
    let lista = document.getElementById('listaAmigos');
    
    // Primero borramos todo lo que había antes
    lista.innerHTML = '';
    
    // Recorremos cada amigo y lo agregamos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

// Esta función hace el sorteo y elige un amigo al azar
function sortearAmigo() {
    // Si no hay amigos suficientes, no podemos hacer el sorteo
    if (amigos.length < 1) {
        alert('Debe ingresar al menos un amigo para realizar el sorteo.');
        return;
    }
    
    // Elegimos un número al azar
    let numeroRandom = Math.floor(Math.random() * amigos.length);
    
    // Con ese número, elegimos un amigo de la lista
    let amigoElegido = amigos[numeroRandom];
    
    // Mostramos el resultado
    let resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo sorteado es: ' + amigoElegido;
}