import { loadCardsData } from "utils/loadCardsData.js";

/**
 * Listar os cards
 */
window.addEventListener("load", async () => {
  await loadCardsData("routes/rotas.php");
});
