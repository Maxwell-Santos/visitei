import { loadCardsByCategory } from "../../utils/loadCardsData.js";

window.addEventListener("load", async () => {
  await loadCardsByCategory("../../routes/rotas.php/shoppings");
});
