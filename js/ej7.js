/**
 * Ejemplos de eventos de eventos I
 * @author:Isaías FL.
 * @description Eventos en el DOM
 */

const boton = document.getElementById("boton");
const caja = document.getElementById("caja");

boton.addEventListener("click", (e) => {
  console.log("click");
});
boton.addEventListener("dblclick", (e) => {
  console.log("doble click");
});

boton.addEventListener("mouseenter", (e) => {
  caja.classList.replace("red", "blue");
});

boton.addEventListener("mouseleave", (e) => {
  caja.classList.replace("blue", "red");
  console.log(e);
});

/* 
Otros eventos🧮 de ratón
- mouseenter - Cuando entramos en la zona que tiene el evento.
- mouseleave - Cuando salimos de la zona que tiene el evento.
- mousedown - Cuando pulsamos el botón izquierdo del ratón.
- mouseup - Cuando soltamos el botón izquierdo del ratón.
- mousemove - Cuando movemos el ratón.
*/

/*
Otros eventos de teclado en
- keydown -cuando pulsamos una tecla.
- keyup - cuando soltamos una tecla.
- keypress - cuando pulsamo una tecla y no la soltamos.


 */
