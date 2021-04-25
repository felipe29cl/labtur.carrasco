let usuario = prompt('Ingrese su nombre')

let titulo = document.getElementById('titulo')
titulo.innerHTML = 'Bienvenido ' + usuario

const contenedorProductos = document.getElementById('contenedor-productos')


let stockProductos = [
    {id: 1, nombre: "Mochila Trekking Travell", precio: 55000, img: 'img/mochila1.jpg'},
    {id: 2, nombre: "Mochilla Trekking Montaña", precio: 75000, img: 'img/mochila2.jpg'},
    {id: 3, nombre: "Mochila Easy Fit", precio: 45000, img: 'img/mochila3.jpg'},
    {id: 4, nombre: "Zapatilla Senderismo Montaña", precio: 50000, img: 'img/zapatilla1.jpg'},
    {id: 5, nombre: "Zapatos Trekking Montaña", precio: 120000, img: 'img/zapatilla2.jpg'},
    {id: 6, nombre: "Botas de Trekking", precio: 65000, img: 'img/zapatilla3.jpg'},
    {id: 7, nombre: "Camisa Trekking Arpenaz 100", precio: 13000, img: 'img/camisa1.jpg'},
    {id: 8, nombre: "Camisa Manga Larga", precio: 25000, img: 'img/camisa2.jpg'},
    {id: 9, nombre: "Polera Manga Larga", precio: 2300, img: 'img/camisa3.jpg'},

]

stockProductos.forEach((producto) => {
    
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <p>Nombre: ${producto.nombre}</p></p>
                    <p>Precio: $ ${producto.precio}</p>
        `
        contenedorProductos.appendChild(div)

    })
