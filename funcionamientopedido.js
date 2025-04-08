//Enviar datos del formulario

//Traigo inputs
const datoNombre = document.querySelector('#nombre');
const datoPedido = document.querySelector('#pedido');
const datoPago = document.querySelector('#pago');

const botonEnviar = document.querySelector('#enviar');

function enviarPedido() {
    // Construir el mensaje de WhatsApp con los valores del formulario
    const mensajePedido = `https://api.whatsapp.com/send?phone=+573124811154&text=Nombre:%20${datoNombre.value}%0APedido:%20${datoPedido.value}%0AMétodo%20de%20pago:%20${datoPago.value}`;

    // Cambiar el href del botón para redirigir a WhatsApp
    window.location.href = mensajePedido;
}
document.addEventListener('DOMContentLoaded', function() {

    const botonVolverPedido = document.querySelector('.Volver');
    
    botonVolverPedido.addEventListener('click',function(){
        window.location.href = "servicios.html";
    });
});

