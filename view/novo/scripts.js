const estrelas = document.querySelectorAll(".estrelas input");
const notas = new Map();

estrelas.forEach(estrela => {
  estrela.addEventListener("change", () => {
    const estrelaId = estrela.id;
    notas.set(estrela.name, estrela.value);

    mostrarMedia(calcularMedia());

    console.log(estrela);
  });
});

function calcularMedia() {
  let media = 0;

  notas.forEach(item => {
    media = media + Number(item);
  });
  media = media / notas.size;

  return Math.round(media);
}

const estrelasMedia = document.querySelectorAll("#estrelasMedia input");

function mostrarMedia(media) {
  estrelasMedia.forEach(estrela => {
    if (estrela.value == media) {
      estrela.checked = true;
    } else estrela.checked = false;
  });
}

document.querySelector("#telefone").addEventListener("input", formatar);

function formatar(event) {
  let valor = event.target.value;

  // Remove todos os caracteres não numéricos
  valor = valor.replace(/\D/g, "");

  // Adiciona a máscara de Reais enquanto digita
  if (valor.length > 2) {
    valor = `R$ ${valor.slice(0, -2)},${valor.slice(-2)}`;
  } else if (valor.length === 2) {
    valor = `R$ ${valor}`;
  }

  // Atualiza o valor do campo
  event.target.value = valor;
}

const containerEstrelas = document.querySelectorAll(".sessao-notas div");

function checarEstrelasSelecionadas() {
  console.log(containerEstrelas);
}

/**
 * selecionar img do card
 */
const imgs = {
  "inpt-img1": document.querySelector("#img1"),
  "inpt-img2": document.querySelector("#img2"),
  "inpt-img3": document.querySelector("#img3"),
};
function addImage(idInput) {
  const input = document.getElementById(idInput);

  input.click();

  input.onchange = event => {
    if (!(event.target && event.target.files && event.target.files.length > 0))
      return;

    var r = new FileReader();
    r.onload = function () {
      Object.entries(imgs).forEach(([prop, value]) => {
        if (prop == idInput) {
          value.src = r.result;
          value.style.opacity = "1";
        }
      });
    };
    r.readAsDataURL(event.target.files[0]);
  };
}
