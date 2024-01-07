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

/**
 * Listar os cards
 */
window.addEventListener("load", async () => {
  const cardsContent = document.querySelector(".cards");
  const nodesCards = [];
  try {
    const response = await fetch("../routes/rotas.php");
    const { places } = await response.json();

    places.forEach(({ name, cards }) => {
      cards.map(card => {
        cardsContent.innerHTML += `<article class="card" data-id="${card.id}">
        <div class="card-data">${new Date(card.date).toLocaleDateString()}</div>
        <div class="card-content">
          <img
            src="https://images.unsplash.com/photo-1539735257177-0d3949225f96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" class="card-img" loading="lazy" >
          <div class="card-infos">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        </div>
        
        <div class="card-rodape">
          <span>${card.price}</span>
          <span>${card.stars.average}</span>
        </div>
        
        <span class="btn-comentarios" onclick="mostrarComentarios(this)">comentários</span>
        
        <div class="card-comentarios" id="1">
          <div class="comentario">
            <div class="comentario-header">
              <img src="../assets/ste.jpg" alt="" class="perfil-comentario" loading="lazy">
              <h4>ester_a_fani</h4>
            </div>
            <p>${card.herComment}</p>
          </div>
          <div class="comentario">
            <div class="comentario-header">
              <img src="../assets/max.jpg" alt="" class="perfil-comentario" loading="lazy">
              <h4>this_maxwell</h4>
            </div>
            <p>${card.himComment}</p>
          </div>
        </div>
        </article>`;
      });
    });
  } catch (error) {
    console.error(error);
  }
});
