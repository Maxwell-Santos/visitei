function mostrarComentarios(eu) {
  const comentarios = eu.nextElementSibling; // pega o próximo node
  comentarios.classList.toggle("mostrar");
}

const cards = document.querySelectorAll(".card-content");

cards.forEach(card => {
  const id = card.getAttribute("data-id");

  card.addEventListener("click", e => {
    window.location.href = `/infos/index.html?id=${id}`;
  });
});
