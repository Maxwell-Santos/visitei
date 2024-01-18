// prettier-ignore

export async function loadCardsData(url) {
  const cardsContent = document.querySelector(".cards");

  try {
    const response = await fetch(url);
    const { places } = await response.json();

    places.forEach(({ name, cards }) => {
      cards.map(card => {
        let {price, color} = setColor(card.price);

        cardsContent.innerHTML += `<article class="card" data-id="${card.id}-${name.toLowerCase()}">
        <div class="card-data">${new Date(card.date).toLocaleDateString()}</div>
        <div class="card-content" onclick="showDetails(this)">
          <img
            src="${card.imgs.img1}"
            alt="" class="card-img" loading="lazy" >
          <div class="card-infos">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        </div>
        
        <div class="card-rodape">
          <span style="color: ${color};">${price}</span>
          <div>${generateStars(card.stars.average)}</div>
        </div>
        
        <span class="btn-comentarios" onclick="mostrarComentarios(this)">comentários</span>
        
        <div class="card-comentarios" id="1">
          <div class="comentario">
            <div class="comentario-header">
              <img src="assets/ste.jpg" alt="" class="perfil-comentario" loading="lazy">
              <h4>ester_a_fani</h4>
            </div>
            <p>${card.herComment}</p>
          </div>
          <div class="comentario">
            <div class="comentario-header">
              <img src="assets/max.jpg" alt="" class="perfil-comentario" loading="lazy">
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
}

// prettier-ignore

export async function loadCardsByCategory(url) {
  const cardsContent = document.querySelector(".cards");
  const title = document.querySelector(".titulo");
  try {
    const response = await fetch(url);
    const place = await response.json();

    title.innerHTML = place.name;

    if (!place.cards.length) {
      cardsContent.innerHTML = `
      <div style="margin-bottom: 40px">
        <img src="../../assets/ste.jpg" alt="nenhuma visita encontrada" style="max-width: 500px" />
        <h2 style="text-align: center">Nenhuma visita encontrada 🥲</h2>
      </div>
      `;
      return;
    }

    for (let i = 0; i < place.cards.length; i++) {
      const card = place.cards[i];
      let {price, color} = setColor(card.price);

      cardsContent.innerHTML += `<article class="card" data-id="${card.id}-${place.name.toLowerCase()}">
      <div class="card-data">${new Date(card.date).toLocaleDateString()}</div>
      <div class="card-content" onclick="showDetails(this, 'inCategory')">
        <img
          src="../../${card.imgs.img1}"
          alt="" class="card-img" loading="lazy" >
        <div class="card-infos">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      </div>
      
      <div class="card-rodape">
        <span style="color: ${color};">${price}</span>
        <span class="media">${generateStars(card.stars.average)}</span>
      </div>
      
      <span class="btn-comentarios" onclick="mostrarComentarios(this)">comentários</span>
      
      <div class="card-comentarios" id="1">
        <div class="comentario">
          <div class="comentario-header">
            <img src="../../assets/ste.jpg" alt="" class="perfil-comentario" loading="lazy">
            <h4>ester_a_fani</h4>
          </div>
          <p>${card.herComment}</p>
        </div>
        <div class="comentario">
          <div class="comentario-header">
            <img src="../../assets/max.jpg" alt="" class="perfil-comentario" loading="lazy">
            <h4>this_maxwell</h4>
          </div>
          <p>${card.himComment}</p>
        </div>
      </div>
      </article>`;
    }
  } catch (error) {
    console.error(error);
  }
}

function generateStars(quant) {
  let stars = "";

  for (let i = 1; i <= quant; i++) {
    stars += '<i class="ph-fill ph-star"></i>';
  }
  return stars;
}

function setColor(price) {
  let priceSplitted = price.split(",")[0].split(" ")[1];

  let obj = {
    color: "",
    price,
  };

  console.log(price, "-", priceSplitted);

  if (priceSplitted <= 100) {
    obj.color = "#69cf69";
  } else if (priceSplitted > 100 && priceSplitted <= 160) {
    obj.color = "#f79723";
  } else if (priceSplitted > 160) {
    obj.color = "#f53b3b";
  }

  return obj;
}
