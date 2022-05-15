export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('boton').onclick = this.validacionEdad.bind(this)
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
    
    validacionEdad(fecha){
        var fechaHoy = new Date()
        var fechaNacimiento = new Date(fecha)
        var edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear()
        var c = fechaHoy.getMonth() - fechaNacimiento.getMonth()

        if(c<0 || (c === 0 && fechaHoy.getDate() < fechaNacimiento.getDate())){
            edad --
        }

        if(edad>=18)
            window.alert("Mayor de 18 años")
        else
            window.alert("Menor de 18 años")
    }
}