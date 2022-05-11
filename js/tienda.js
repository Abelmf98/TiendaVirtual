import {VistaProductos} from './vistas/vistaproductos.js'
import {VistaCarrito} from './vistas/vistacarrito.js'
import {Modelo} from './modelos/modelo.js'

class Tienda{

    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    iniciar(){

        this.modelo = new Modelo()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    verCarrito(){

        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    verProductos(){

        this.vistaCarrito.mostrar(false)
        this.vistaProductos.mostrar(true)
    }

    anadirCarrito(producto){
        this.modelo.push(producto)
        this.vistaProductos.setNumProductos(this.modelo.carritos.length)
    }
    
}

new Tienda()