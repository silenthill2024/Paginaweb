
// Obtener los videojuegos guardados en LocalStorage
let juegos = JSON.parse(localStorage.getItem("juegos")) || [];


// Función para mostrar un videojuego seleccionado
function mostrarJuego(nombre) {

    const mensaje = document.getElementById("mensajeJuego");

    mensaje.innerHTML =
        "Has seleccionado: <strong>" + nombre + "</strong>";
}


// Función para agregar un videojuego
function agregarJuego() {

    const nombre = document.getElementById("nombreJuego").value;

    // Comprobar que el campo no esté vacío
    if (nombre === "") {

        alert("Escribe el nombre de un videojuego");

        return;
    }


    // Crear el objeto del videojuego
    const juego = {

        id: Date.now(),

        nombre: nombre
    };


    // Agregar el videojuego al arreglo
    juegos.push(juego);


    // Guardar los videojuegos en LocalStorage
    localStorage.setItem("juegos", JSON.stringify(juegos));


    // Limpiar el campo de texto
    document.getElementById("nombreJuego").value = "";


    // Mostrar nuevamente la lista
    mostrarJuegos();
}


// Función para mostrar los videojuegos registrados
function mostrarJuegos() {

    const lista = document.getElementById("listaJuegos");


    // Limpiar la lista
    lista.innerHTML = "";


    // Recorrer los videojuegos
    juegos.forEach(function(juego) {

        const elemento = document.createElement("div");


        // Crear el contenido del registro
        elemento.innerHTML = `
            <strong>ID:</strong> ${juego.id}
            <br>
            <strong>Videojuego:</strong> ${juego.nombre}
        `;


        // Agregar el registro a la página
        lista.appendChild(elemento);
    });
}


// Mostrar los videojuegos guardados al cargar la página
mostrarJuegos();

