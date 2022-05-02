/**
 * Controlador principal de la aplicacion
 */

import{vistaProductos} from './vistas/vistaproductos.js'
import{Modelo} from './modelos/modelo.js'
import {vistaCarrito} from './vistas/vistacarrito.js'

class Tienda{
    constructor(vista, modelo){
        this.vista = vista
        this.modelo = modelo
    }

    iniciar(){
        this.vistaCarrito = new vistaCarrito(this)
        this.modelo = new Modelo()
        this.vistaProductos = new vistaProductos(this, this.modelo.getProductos())
        this.vistaProductos.mostrar(true)
    }

    verProductos(){
        this.vistaProductos.mostrar(true)
        this.vistaCarrito.mostrar(false)
    }

    verCarrito(){
        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    anadirCarrito(producto){
        this.modelo.carrito.push(producto)
    }
}

new Tienda()