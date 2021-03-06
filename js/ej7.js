/**
 * Ejemplos de eventos de eventos I
 * @author:Isa铆as FL.
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
Otros eventos馃М de rat贸n
- mouseenter - Cuando entramos en la zona que tiene el evento.
- mouseleave - Cuando salimos de la zona que tiene el evento.
- mousedown - Cuando pulsamos el bot贸n izquierdo del rat贸n.
- mouseup - Cuando soltamos el bot贸n izquierdo del rat贸n.
- mousemove - Cuando movemos el rat贸n.
*/

/*
Otros eventos de teclado en
- keydown -cuando pulsamos una tecla.
- keyup - cuando soltamos una tecla.
- keypress - cuando pulsamo una tecla y no la soltamos.


 */
