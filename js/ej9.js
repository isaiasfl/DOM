/**
 * Ejercicio Flujos de eventos (burbuja)
 * @author:Isaías FL.
 * @description Como funcionan los flujos de eventos. Burbujeo.
 */

function flujoEventos(evento) {
  //  console.log(`soy el evento ${this}`);
  console.log(
    `Hola soy el evento ${this.className} y el click lo  lanzó ${evento.target.className}`
  );
  // para detener la propagación usamos🦖
  //e.stopPropagation(); // para la propagación del evento.
  //e.preventDefault(); // impide la acción por defecto.(probar con un enlace por ejemplo)
}

const eventosDiv = document.querySelectorAll(".flujos-eventos div");
eventosDiv.forEach((div) => {
  // La fase de burbuja se obtine poniendo como tercer parámetro del addEventListener false o nada
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  // la fase de captura sería al contrario de la burbuja colocamos el parámetro a true
  // iríamos desde el elemento más externo al más interno.
  //div.addEventListener("click", flujoEventos, true);
  // en estructuras con muchos elementos quizás el método de captura es más eficiente
  // en la documentación de EventListener para el
  // se puede ver los parámetros de capture
  div.addEventListener("click", flujoEventos, {
    capture: false, // activo el modo burbuja (interior al exterior)
    once: true, // sólo lanzará una sóla vez el evento
  });
});
