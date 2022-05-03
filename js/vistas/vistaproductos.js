export class VistaProductos{

    constructor(controlador, productos){

        this.controlador = controlador
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this);
        this.cargarProductos(productos)
    }

    mostrar(ver){

        if(ver){

            divProducto.style.display = 'block'
        }else {

            divProducto.style.display = 'none';
        }
    }

    verCarrito(){

        this.controlador.verCarrito()
    }

    cargarProductos(productos){

        let cajas = document.createElement('div')
        divProducto. appendChild(cajas)
        cajas.classList.add('cajas')

            for (let producto of productos) {

                let caja = document.createElement('div')
                cajas.appendChild(caja)
                caja.classList.add('caja')

                let img = document.createElement('img')
                caja.appendChild(img)
                img.src=producto.imagen
                
                
                let p = document.createElement('p')
                caja.appendChild(p)
                p.textContent = producto.nombre 
                p.style = 'color:steelblue'

                let p2 = document.createElement('p')
                caja.appendChild(p2)
                p2.textContent = producto.precio.toFixed(2) +'€'

                let button = document.createElement('button')
                caja.appendChild(button)
                button.textContent = 'Añadir'
                
                button.onclick = this.anadirCarrito.bind(this, producto) 
            }
    }

    anadirCarrito(producto){

        this.controlador.anadirCarrito(producto)
    }
}