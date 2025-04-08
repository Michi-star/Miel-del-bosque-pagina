document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.Boton1');

    boton.addEventListener('click', function() {
        window.location.href = "servicios.html"; 
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const botonProductos = document.querySelector('.BotonProductos');
    const botonInsumos = document.querySelector('.BotonInsumos');
    const botonTips = document.querySelector('.BotonTips');
    const botonAcerca = document.querySelector('.BotonAcerca');
    const botonPedido = document.querySelector('.pedido');
   
    botonPedido.addEventListener('click',function(){
        window.location.href = "pedido.html";
    });

    botonProductos.addEventListener('click', function() {
        window.location.href = "productos.html"; // Reemplaza con la URL correcta
    });

    botonInsumos.addEventListener('click', function() {
        window.location.href = "insumos.html"; // Reemplaza con la URL correcta
    });

    botonTips.addEventListener('click', function() {
        window.location.href = "Tips.html"; // Reemplaza con la URL correcta
    });

    botonAcerca.addEventListener('click', function() {
        window.location.href = "Acerca_de_nosotros.html"; // Reemplaza con la URL correcta
    });

});



//Detalles

// Obtener todas las tarjetas
const tarjetas = document.querySelectorAll('.producto');

tarjetas.forEach(tarjeta => {
  // Obtener los elementos dentro de cada tarjeta
  const verDetallesBtn = tarjeta.querySelector('.ver-detalles');
  const ocultarDetallesBtn = tarjeta.querySelector('.ocultar-detalles');
  const cardContent = tarjeta.querySelector('.detallesProducto');
  const cardDetails = tarjeta.querySelector('.card-details');

  // Evento para el botón "Ver detalles"
  verDetallesBtn.addEventListener('click', () => {
    cardContent.style.display = 'none';
    cardDetails.style.display = 'block';
  });

  // Evento para el botón "Ocultar detalles"
  ocultarDetallesBtn.addEventListener('click', () => {
    cardDetails.style.display = 'none';
    cardContent.style.display = 'block';
  });
});


//Tips

function redirigirACuidado() {
    window.location.href = 'Tips1.html';
}

function redirigirAProduccion() {
    window.location.href = 'Tips2.html';
}


document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los botones con texto alternativo
    const botones = document.querySelectorAll('.Cuidado, .espacio, .Produccion');
    
    // Iteramos sobre cada botón y añadimos el evento correspondiente
    botones.forEach(function(btn) {
        const textoAlternativo = btn.querySelector('.texto-alternativo');
        
        // Mostrar el texto alternativo cuando se pasa el mouse
        btn.addEventListener('mouseover', function() {
            textoAlternativo.style.opacity = '1';
            textoAlternativo.style.visibility = 'visible';
        });

        // Ocultar el texto alternativo cuando el mouse sale
        btn.addEventListener('mouseout', function() {
            textoAlternativo.style.opacity = '0';
            textoAlternativo.style.visibility = 'hidden';
        });
    });
});


// Obtener el botón por su id
const volverBtnProductos = document.getElementById("btnVolverProductos");

volverBtnProductos.addEventListener("click", function() {
    // Redirigir a la página de servicios
    window.location.href = "servicios.html";  

});

