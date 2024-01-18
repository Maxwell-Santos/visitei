const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const idCard = id.split("-")[0];
const category = id.split("-")[1];

fetch(`../../routes/rotas.php/${category}/${idCard}`)
  .then(resp => resp.json())
  .then(card => {
    document.querySelector("body").innerHTML += `
    <div class="">
    <div class="cabecalho">
      <h2>${card.title}</h2>
      <p>${card.description}</p>
    </div>

    <div>
      <div class="card-cabecalho">
        <span class="data">${new Date(card.date).toLocaleDateString()}</span>
        <span>${card.price}</span>
      </div>

      <div class="imgs">
        <img src="../../${card.imgs.img1}" alt="">
        <img src="../../${card.imgs.img2}" alt="">
        <img src="../../${card.imgs.img3}" alt="">
      </div>

      <div class="notas">
        <div>
          <span>Ambiente</span>
          <span>${generateStars(card.stars.environment)}</span>
        </div>
        <div>
          <span>Logística</span>
          <span>${generateStars(card.stars.logistic)}</span>
        </div>
        <div>
          <span>Preço</span>
          <span>${generateStars(card.stars.price)}</span>
        </div>
      </div>

      <div class="comentarios">
        <h4>Comentários</h4>

        <div>
          <div>
            <span><b>ester_a_fani</b></span>
            <p>${card.herComment}</p>
          </div>
          <div>
            <span><b>this_maxwell</b></span>
            <p>${card.himComment}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  })
  .catch(err => console.error(err));

function generateStars(quant) {
  let stars = "";

  for (let i = 1; i <= quant; i++) {
    stars += '<i class="ph-fill ph-star"></i>';
  }

  return stars;
}
