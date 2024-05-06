function main() {
  var botones = document.getElementsByClassName("abrir-ventana");
  var ventana = document.getElementsByClassName("ventana-emergente")[0];

  // Agregar evento de click a los botones para mostrar la ventana emergente
  for (var i = 0; i < botones.length; i++) {
    var boton = botones[i];

    boton.addEventListener("click", function () {
      if (ventana) {
        ventana.style.display = "flex";
        console.log("¡Se hizo clic en un botón para abrir la ventana!");
      } else {
        console.log("No se encontró el elemento 'ventana-emergente'");
      }
    });
  }

  // Corregir los selectores para los enlaces dentro de la ventana emergente
  var portafolioLink = document.querySelector(".portfolio");
  var serviciosLink = document.querySelector(".servicios");
  var contactoLink = document.querySelector(".contacto");

  portafolioLink.addEventListener("click", function () {
    // Redirigir a portfolio.html dentro de la carpeta "portfolio"
    window.location.href = "./portfolio.html";
  });

  serviciosLink.addEventListener("click", function () {
    // Redirigir a servicios.html dentro de la carpeta "servicios"
    window.location.href = "./servicios.html";
  });

  contactoLink.addEventListener("click", function () {
    // Redirigir a contactos.html dentro de la carpeta "contactos"
    window.location.href = "./contactos.html";
  });
}

function cerrar() {
  var cerrarBotones = document.getElementsByClassName("boton__cerrar");
  var ventana = document.getElementsByClassName("ventana-emergente")[0]; // Acceder al elemento ventana-emergente

  // Agregar evento de click a los botones de cerrar para ocultar la ventana emergente
  for (var i = 0; i < cerrarBotones.length; i++) {
    var botonCerrar = cerrarBotones[i];

    botonCerrar.addEventListener("click", function () {
      if (ventana) {
        ventana.style.display = "none";
        console.log("¡Se hizo clic en el botón para cerrar la ventana!");
      } else {
        console.log("No se encontró el elemento 'ventana-emergente'");
      }
    });
  }
}

// Llamar a la función principal 'main' una vez que se cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  main(); // Llamar a la función principal para configurar el botón de abrir ventana
  cerrar(); // Llamar a la función para configurar el botón de cerrar ventana
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos del header de escritorio
  var portafolioHeader = document.querySelector(".portafolio__header");
  var serviciosHeader = document.querySelector(".servicios__header");
  var contactoHeader = document.querySelector(".contacto__header");

  // Agregar eventos de clic a cada elemento del header
  portafolioHeader.addEventListener("click", function () {
    // Redirigir a portfolio.html
    window.location.href = "./portfolio.html";
  });

  serviciosHeader.addEventListener("click", function () {
    // Redirigir a servicios.html
    window.location.href = "./servicios.html";
  });

  contactoHeader.addEventListener("click", function () {
    // Redirigir a contactos.html
    window.location.href = "./contactos.html";
  });
});
