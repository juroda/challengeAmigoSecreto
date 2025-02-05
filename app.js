let amigos = [];  // Array para almacenar los nombres de los amigos

// Función para agregar el nombre a la lista de amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre antes de añadir.");  // Muestro el alert si el campo está vacío
        return;  // Salgo de la función sin hacer nada
    }

    amigos.push(nombreAmigo);  // Añado el nombre al array
    mostrarListaAmigos();  // Actualizo la lista visible en la página
    input.value = "";  // Limpio el campo de texto
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpio la lista antes de volver a mostrarla

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);  // Añado cada amigo a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, ingresa al menos un nombre antes de sortear.");
        return;
    }

    // SSelecciono un amigo aleatorio
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Muestros el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}