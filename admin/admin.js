function guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje') 

// Añadir un producto 
const  añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciasAñadir')
const añadirImagen = document.getElementById('añadeImagen')

document.getElementById("botonAñadir").addEventListener("click", function (even){
    event.preventDefault()
    let productoAñadir = añadirProducto.value
    let valorAñadir = añadirValor.value
    let existenciasAñadir = añadirExistencia.value
    let añadirImagen = añadirImagen.value 

    let van = true

    if (productoAñadir == '' || valorAñadir == '' || existenciasAñadir == '' ||
        añadirImagen == ''){
        mensaje.classList.add('llenarCampos')
        setTimeout(() => {mensaje.classList.remove('llenarCampos')}, 2500)
        van = false

    }
    else{
        for (let i=0; i< productos.length; i++){
            if( productos[i].nombre == productoAñadir){
                mensaje.classList.add('repeditoError')
                setTimeout(() => {mensaje.classList.remove('repetidoError')}, 2500)
                van = false
            }
        }
    }

    if (van == true){
        productos.push ({
            nombre: productoAñadir,
            valor: valorAñadir,
            exixtencias: existenciasAñadir,
            urlImagen: añadirImagen
        })
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('repetidoError')
            window.location.reload()
        }, 1500)

    }
    guardarAlmacenamientoLocal('productos',productos)
    
})

// Editar
const productoEd = document.getElementById('productoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')

document.getElementById("botonEditar").addEventListener("click", function (event) {
    event.preventDefault()
    let productoEditar = productoEd.value
    let atributoEditar = atributoEd.value
    let nuevoAtributo = nuevoAtributoEd.value
    let van = false
    if (productoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
        mensaje.classList.add('llenarCampos')
        setTimeout(() => {
            
        }, timeout);
    }
})