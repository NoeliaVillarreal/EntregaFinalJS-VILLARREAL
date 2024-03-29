// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Abrigo Bruk',
        precio: 39.99,
        imagen: './Media/CAMPERA.jpg'
    },
    {
        id: 2,
        nombre: 'Pantalon Devis',
        precio: 17.99,
        imagen: './Media/JEAN.jpg'

    },
    {
        id: 3,
        nombre: 'Sweater Lany',
        precio: 10.99,
        imagen: './Media/SWEATER.jpg'
    },
    {
        id: 4,
        nombre: 'Cinto Penny',
        precio: 3.99,
        imagen: './Media/CINTO 1.jpg'
    }

];

let carrito = [];
const divisa = '€';
const DOMitems = document.getElementById('items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.getElementById('total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

/* Ejecutar HTML desde JS */
const container = document.querySelector("#container");
container.innerHTML = `
            <!-- Carrito -->
            <div id="carrito" class="col-m-8">
                <h2>Tu carrito de compra</h2>
                <!-- Elementos del carrito -->
                <ul id="carrito" class="list-group"></ul>
                <hr>
                <!-- Precio total -->
                <button id="boton-compra" class="btn btn-alert">Comprar</button>
                <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
                <p id="texto-compra"></p>
            </div>
        `

// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();


// Estructura para los productos
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

// Evento para añadir un producto al carrito de la compra
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
}

// Dibuja todos los productos guardados en el carrito
function renderizarCarrito() {
    // Vaciamos html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item 
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Precio total
    DOMtotal.textContent = calcularTotal();
}


// Evento para borrar un elemento del carrito
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}


// Calcula el precio total teniendo en cuenta los productos 
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Funcion para simular compra exitosa
const btnComprar = document.getElementById("boton-compra");
btnComprar.addEventListener("click", function () {

    const compraExitosa = document.getElementById("texto-compra")
    compraExitosa.innerText = "Compra realizada con exito";
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
});

// Funcion para vaciar todo
const btnVaciar = document.getElementById("boton-vaciar");
btnVaciar.addEventListener("click", function () {

    const compraExitosa = document.getElementById("texto-compra")
    compraExitosa.innerText = "";
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
});




