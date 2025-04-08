//Cambiar información de los tips
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
const volverBtnTips = document.getElementById("btnVolverTips");

volverBtnTips.addEventListener("click", function() {
    // Redirigir a la página de servicios
    window.location.href = "Tips.html";  

});
