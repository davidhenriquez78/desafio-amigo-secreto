// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

/* / Función para validar la entrada del usuario
function validarEntrada(nombre) {
    if (!nombre || !isNaN(nombre)) {
        alert("Por favor, escribe un nombre válido.");
        return false;
    }
    return true;
} 
*/
/*
// Función para validar la entrada del usuario

// Comprueba si el valor es inválido:
    // - Está vacío (null, undefined o string vacío)
    // - No es una cadena de texto (typeof nombre !== "string")
    // - Es un número (si pasa la validación anterior pero sigue siendo un número, ej:"123" lo detectamos con !isNaN(nombre))
function validarEntrada(nombre) {
    if (!nombre || typeof nombre !== "string" || !isNaN(nombre)) {
        alert("Por favor, escribe un nombre válido que no sea un número.");
        return false; // Si no cumple, la función devuelve false y detiene la validación
    }
    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. Por favor, escribe un nombre diferente.");
        return false; // Si el nombre está repetido, la función devuelve false
    }
    return true; // Si pasa todas las validaciones, devuelve true (es válido)
}
*/

// Función para validar la entrada del usuario

//^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$: Es una expresión regular que asegura que:
//Solo se acepten letras mayúsculas y minúsculas (incluyendo tildes y la letra "ñ").
//Se permitan espacios (\s), para nombres con más de una palabra.
//No se acepten números ni caracteres especiales.
//El símbolo ^ indica que la validación empieza al inicio del texto, y el $ que termina al final.

function validarEntrada(nombre) {
    const regexSoloTexto = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;

    if (!nombre || !regexSoloTexto.test(nombre)) {
        alert("Por favor, escribe un nombre válido que no contenga números ni caracteres especiales.");
        return false;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        return false;
    }

    return true;
}

//añadir nombres de amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Obtiene el valor del campo de entrada, eliminando espacios al inicio y al final

    if (validarEntrada(nombreAmigo)) {
        listaDeAmigos.push(nombreAmigo);
        inputAmigo.value = ""; //limpia el campo texto
        visualizarLista();
    }
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = ""; // Limpiar resultados anteriores

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado} 🎉`;
    itemResultado.classList.add("highlight");
    resultadoElemento.appendChild(itemResultado);
}

// Función para mostrar la lista de amigos en la página
function visualizarLista() {
    const listaAmigosElemento = document.getElementById("listaAmigos");
    listaAmigosElemento.innerHTML = ""; // Limpiar la lista actual

    //// Recorre el array `listaDeAmigos` y agrega cada nombre como un elemento de lista (<li>)
    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");  // Crea un elemento <li> para cada nombre
        item.textContent = amigo; //// Asigna el texto del nombre al contenido del <li>
        item.classList.add("name-item"); // Agrega una clase CSS al elemento <li> (opcional, para estilos)
        listaAmigosElemento.appendChild(item); // Agrega el <li> al elemento <ul> de la lista
    });
}

