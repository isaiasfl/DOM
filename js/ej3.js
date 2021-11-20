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

  /**
   * Insertar listas ordenadas o desordenadas.
   * @param {Object} contenedor
   * @param {String} tipo
   * @param {Number} numElementos
   * @param {String} textoBase
   */
  let milista = (
    contenedor,
    tipo = "ul",
    numElementos = 1,
    textoBase = "Estamos en la lista"
  ) => {
    //Comprobamos el tipo ol o ul
    if (tipo === "ul" || tipo === "ol") {
      let lista = document.createElement(tipo);
      for (let i = 1; i <= numElementos; i++) {
        let li = document.createElement("li");
        let liTexto = document.createTextNode(textoBase + " " + i);
        li.appendChild(liTexto);
        lista.appendChild(li);
        contenedor.appendChild(lista);
      }
    } else {
      console.log("Error");
    }
  };

  //Creo varias listas ordenadas y no ordenadas de prueba
  milista(contenido, "ol", 5, "lista");
  milista(contenido, "ul", 2);
}

// al cargar la página iniciamos la función init
window.onload = inicio;
