function mostrarComentarios(eu) {
  const comentarios = eu.nextElementSibling; // pega o próximo node
  comentarios.classList.toggle("mostrar");
}
