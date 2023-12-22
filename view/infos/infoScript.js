const params = new URLSearchParams(window.location.search);
const idCard = params.get("id");

console.log(idCard);
