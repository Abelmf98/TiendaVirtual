export class vistaCarrito{
    constructor(controlador){
        this.controlador = controlador
        document.getElementById('verProducto').onclick = this.verProductos.bind(this)
    }

    mostrar(ver){
        if(ver)
            divCarrito.style.display = 'block'
        else
            divCarrito.style.display = 'none'    
    }

    verProductos(){
        this.controlador.verProductos()
    }
}