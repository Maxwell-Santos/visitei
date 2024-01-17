function mostrarComentarios(eu) {
  const comentarios = eu.nextElementSibling; // pega o próximo node
  comentarios.classList.toggle("mostrar");
}

function showDetails(card, isInCategory) {
  const id = card.parentNode.getAttribute("data-id");
  window.location.href = isInCategory
    ? `../infos/index.html?id=${id}`
    : `view/infos/index.html?id=${id}`;
}
