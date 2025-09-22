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
    
    amigos.push(nombre);
    
    document.getElementById('amigo').value = '';
    
    mostrarAmigos();
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Esta función muestra todos los amigos en la pantalla
function mostrarAmigos() {

    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    // Si no hay amigos suficientes, no podemos hacer el sorteo
    if (amigos.length < 1) {
        alert('Debe ingresar al menos un amigo para realizar el sorteo.');
        return;
    }
    
    let numeroRandom = Math.floor(Math.random() * amigos.length);
    let amigoElegido = amigos[numeroRandom];
    
    // Mostramos el resultado
    let resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo sorteado es: ' + amigoElegido;
}