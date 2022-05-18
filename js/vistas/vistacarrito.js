export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        /* document.getElementById('boton').onclick = this.validarLetraDNI.bind(this) */
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

    validarLetraDNI(dni){
        dni = document.getElementById('dni').value

        var numero, letr, letra, regExp

        regExp = /^\d{8}[a-zA-Z]$/
        
        if(regExp.test (dni) == true){

            numero = dni.substr(0,dni.length-1)
            letr = dni.substr(dni.length-1,1)
            numero = numero % 23
            letra='TRWAGMYFPDXBNJZSQVHLCKET'
            letra=letra.substring(numero,numero+1)

            if (letra!=letr.toUpperCase()){

                alert('Dni erroneo, la letra del NIF no se corresponde')
            }else{

                console.log('Dni correcto')
            }
        }else{
            
            alert('Dni erroneo, formato no válido')
        }
    

    }
    
    validacionEdad(fecha){
        fecha = document.getElementById('fecha').value

        var fechaHoy = new Date()
        var fechaNacimiento = new Date(fecha)
        var edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear()
        var c = fechaHoy.getMonth() - fechaNacimiento.getMonth()

        if(c<0 || (c === 0 && fechaHoy.getDate() < fechaNacimiento.getDate())){
            edad --
        }

        console.log(edad)
       
        if(edad>=18)
            window.alert("Mayor de 18 años")
        else
            window.alert("Menor de 18 años")
    }
}