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

const contentfulSpaceId = "z5xxfmz8t2wt";
const contentfulAccessToken = "Avgf6YbTwwUaRUL16FnCvQRPmU8XVsw6sSOns3fnsQQ";

// Endpoint de la API de Contentful para obtener entradas de contenido
const endpoint = `https://cdn.contentful.com/spaces/${z5xxfmz8t2wt}/entries?access_token=${Avgf6YbTwwUaRUL16FnCvQRPmU8XVsw6sSOns3fnsQQ}`;

// Realizar una solicitud GET usando fetch()
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    // Manejar los datos recibidos de Contentful y renderizar en tu página web
    console.log(data); // Aquí puedes procesar los datos obtenidos
    renderContent(data); // Llama a una función para renderizar el contenido en la página
  })
  .catch((error) => {
    console.error("Error al obtener datos de Contentful:", error);
  });

function renderContent(data) {
  // Implementa la lógica para renderizar el contenido en tu página web
  // Por ejemplo, actualiza el HTML de ciertos elementos con los datos obtenidos
}
const url = "https://apx-api.vercel.app/api/utils/dwf";
const data = {
  to: "tucorreo@gmail.com",
  message:
    "Este es un mensaje de prueba enviado desde mi formulario de contacto",
};

document.getElementById("boton__enviar").addEventListener("click", function () {
  const url = "https://apx-api.vercel.app/api/utils/dwf";
  const data = {
    to: "tucorreo@gmail.com",
    message:
      "Este es un mensaje de prueba enviado desde mi formulario de contacto",
  };

  // Realizar la solicitud POST utilizando fetch()
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data), // Convertir el objeto 'data' a JSON
  })
    .then((response) => {
      if (response.ok) {
        alert("Email enviado correctamente");
      } else {
        throw new Error("Error al enviar el email");
      }
    })
    .catch((error) => {
      console.error("Error en el envío del email:", error);
      alert("Error al enviar el email");
    });
});
