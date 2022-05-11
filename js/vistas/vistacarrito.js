export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('boton').onclick = this.validaciones.bind(this)
    }
    
    mostrar(ver){

        if(ver){

            divCarrito.style.display = 'block'
        }else{

            divCarrito.style.display = 'none'
        }
    }

    verProductos(){
        this.controlador.verProductos()
    }
    
    validaciones(){
        let edad = document.getElementById('fecha').value
        

        if(edad<18){
            window.alert('Aun no puedes ir a la cárcel')
        }
    }
}