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
  try {
    const response = await fetch(
      "http://localhost/visiteiApp/src/routes/rotas.php"
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})` <article class="card" data-id="1">
<div class="card-data">10/04/23</div>
<div class="card-content">
  <img
    src="https://images.unsplash.com/photo-1539735257177-0d3949225f96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="" class="card-img">
  <div class="card-infos">
    <h3>Prato de comida sem laranja</h3>
    <p>Prato de comida muito gostosa que comemos em algum lugar que eu não me lembro mas é isso ai
      Prato de comida muito gostosa que comemos em algum lugar que eu não me lembro mas é isso ai</p>
  </div>
</div>

<div class="card-rodape">
  <span>R$ 200,00</span>
  <span>*****</span>
</div>

<span class="btn-comentarios" onclick="mostrarComentarios(this)">comentários</span>

<div class="card-comentarios" id="1">
  <div class="comentario">
    <img src="" alt="" class="perfil-comentario">
    <h4>ester_a_fani</h4>
    <p>
      gostei bastante da comida, mas o atendimento foi mais ou menos e o preço é meio salgado.
    </p>
  </div>
  <div class="comentario">
    <img src="" alt="" class="perfil-comentario">
    <h4>this_maxwell</h4>
    <p>
      gostei bastante da comida, mas o atendimento foi mais ou menos e o preço é meio salgado.
    </p>
  </div>
</div>
</article>`;
