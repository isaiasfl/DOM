/**
 * Ejercicio acordeon JavaScript (eventos)
 * @author:Isaías FL.
 * @description Crear un acordeón de texto al pulsar un botón.
 */

const elemAcordeon = document.getElementsByClassName("acordeon");
console.log(elemAcordeon);
for (let elemento of elemAcordeon) {
  elemento.addEventListener("click", function () {
    elemento.classList.toggle("active");
    let panel = elemento.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// elemAcordeon.forEach((elemento) => {
//   elemento.addEventListener("click", () => {
//     this.classList.toggle("active");
//     this.nextElementSibling();
//   });
// });
