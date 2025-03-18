// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = []; // Inicializa un array vacío para almacenar los nombres de amigos
const amigosSorteados = []; // Inicializa un array para almacenar los amigos sorteados

function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtiene el campo de texto por su ID
    const nombreAmigo = input.value.trim(); // Obtiene el valor del campo de texto y elimina espacios en blanco

    // Verifica si el campo de texto no está vacío y si el nombre no ya existe en la lista
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo); // Agrega el nombre al array de amigos

        // Limpia el campo de texto
        input.value = '';

        // Actualiza la lista visible en el HTML
        const listaAmigos = document.getElementById('listaAmigos'); // Obtiene la lista (ul) por su ID
        listaAmigos.innerHTML = ''; // Limpia la lista actual

        // Recorre el array de amigos y agrega cada nombre a la lista en el HTML
        amigos.forEach(function(amigo) {
            const li = document.createElement('li'); // Crea un nuevo elemento de lista
            li.textContent = amigo; // Asigna el nombre del amigo
            listaAmigos.appendChild(li); // Agrega el elemento a la lista en el HTML
        });
    } else if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.'); // Mensaje de alerta si el nombre ya existe
    } else {
        alert('Por favor, escribe un nombre válido.'); // Mensaje de alerta si el campo está vacío
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.'); // Mensaje si no hay amigos en la lista
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Verifica si el amigo ya fue sorteado
    if (!amigosSorteados.includes(amigoSorteado)) {
        amigosSorteados.push(amigoSorteado); // Agrega el amigo sorteado a la lista
        alert(`El amigo sorteado es: ${amigoSorteado}`); // Muestra el amigo sorteado
    } else {
        sortearAmigo(); // Llama a la función nuevamente si el amigo ya fue sorteado
    }
}

