// Archivo: main.js

// Función para agregar un producto a la cesta

function agregarAlCarrito(nombreProducto, event) {

    event = event || window.event;


    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }

    var cesta = localStorage.getItem('cesta');
    if (!cesta) {

        cesta = [];
    } else {

        cesta = JSON.parse(cesta);
    }


    cesta.push(nombreProducto);


    localStorage.setItem('cesta', JSON.stringify(cesta));


    actualizarCesta();
}


// Función para actualizar la visualización de la cesta

function actualizarCesta() {
    var cestaElement = document.getElementById('cesta');
    var cesta = localStorage.getItem('cesta');

    if (!cesta) {
        cestaElement.innerHTML = '<li>¡Carrito Vacío!</li>';
    } else {
        cesta = JSON.parse(cesta);
        var listaProductos = '';

        for (var i = 0; i < cesta.length; i++) {
            listaProductos += '<li class="lista-verde">' + cesta[i] + ' <button onclick="eliminarProducto(' + i + ')" class="btn-eliminar lista">x</button></li>';
        }

        cestaElement.innerHTML = listaProductos;
    }
}

// Función para limpiar la cesta de compras

function limpiarCesta() {

    localStorage.removeItem('cesta');

    actualizarCesta();
}


// Efecto al hacer clic en el botón Limpiar cesta

$(document).ready(function () {
    $("#btn-limpiar").click(function () {
        $(this).css("transform", "rotate(360deg)")
            .animate({ opacity: 0 }, 500)
            .animate({ opacity: 1 }, 500)
            .css("transform", "rotate(0deg)");
    });
});

// Función para eliminar un producto de la cesta

function eliminarProducto(index) {

    var cesta = localStorage.getItem('cesta');
    if (cesta) {

        cesta = JSON.parse(cesta);


        var productoEliminado = cesta.splice(index, 1)[0];


        localStorage.setItem('cesta', JSON.stringify(cesta));


        actualizarCesta();

    }
}




