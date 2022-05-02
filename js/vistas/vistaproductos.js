export class vistaProductos{
    constructor(controlador, productos){
        this.controlador = controlador
        //Captura de eventos
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this)
        this.cargarProductos(productos)
    }
    mostrar(ver){
        if(ver)
            divProductos.style.display = 'block'
        else
            divProductos.style.display = 'none'    
    }

    verCarrito(){
        //Validacion de los datos...
        this.controlador.verCarrito()
    }
    
    cargarProductos(productos){
        for(let producto of productos){

            //creo div contenedor
            let divContenedor = document.createElement('div')
            divProductos.appendChild(divContenedor)
            divContenedor.classList.add('contenedor')
        }
    }

    anadirCarrito(producto){
        this.controlador.anadirCarrito(producto)
    }
}