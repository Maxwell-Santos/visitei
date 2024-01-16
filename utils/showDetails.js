function mostrarComentarios(eu) {
  const comentarios = eu.nextElementSibling; // pega o próximo node
  comentarios.classList.toggle("mostrar");
}

function showDetails(card) {
  const id = card.parentNode.getAttribute("data-id");
  window.location.href = `infos/index.html?id=${id}`;
}
