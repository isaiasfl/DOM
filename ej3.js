/**
 * @author Isaías FL.
 * @description Creación de párrafos, enlaces y listas en JavaScript
 */
function inicio() {
  let contenido = document.getElementById("contenido"); // cargamos el DIV contenido a través de su ID

  // insertar párrafo:
  let parrafo1 = document.createElement("p"); // creo el nodo párrafo
  let parrafo1Texto = document.createTextNode("Texto del párrafo 1"); // creo el nodo texto
  parrafo1.appendChild(parrafo1Texto); // Añado el nodo texto como hijo del nodo párrafo
  contenido.appendChild(parrafo1); // Añado el nodo párrafo p al DIV

  // insertar enlace:
  let enlace1 = document.createElement("a");
  enlace1.setAttribute("href", "http://www.google.es");
  let enlaceTexto = document.createTextNode("Texto del enlace");
  enlace1.appendChild(enlaceTexto);
  contenido.appendChild(enlace1);

  //insertar
}

// al cargar la página iniciamos la función init
window.onload = inicio;
