import {Producto} from "../pojos/producto.js";

export class Modelo{
    constructor(){
        this.productos = []
        this.carritos = []
        this.cargar()
    }

    cargar(){
        this.productos[0] = new Producto('Tarta de Queso', 10, '../../img/tarta-queso.jpg')
        this.productos[1] = new Producto('Tarta de Queso', 10, '../../img/tarta-queso.jpg')
        this.productos[2] = new Producto('Tarta de Queso', 10, '../../img/tarta-queso.jpg')
        this.productos[3] = new Producto('Tarta de Queso', 10, '../../img/tarta-queso.jpg')
        this.productos[4] = new Producto('Tarta de Queso', 10, '../../img/tarta-queso.jpg')
    }

    getProductos(){
        return this.productos
    }
}