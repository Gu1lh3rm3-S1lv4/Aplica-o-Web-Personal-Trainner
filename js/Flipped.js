//* Seleciona todos os elementos com a classe .flip-card-inner
//* Cada um desses é a parte interna do card que vai girar
const cards = document.querySelectorAll(".flip-card-inner");

//* Para cada card, adicionamos um listener de "mouseenter" no elemento pai (.flip-card)
cards.forEach(card => {
    card.parentElement.addEventListener("mouseenter", () => {
        //* Antes de girar o card atual, removemos a classe "flipped" de todos os cards
        //* Isso garante que apenas um card fique virado por vez
        cards.forEach(c => c.classList.remove("flipped"));
        //* Agora adicionamos a classe "flipped" somente no card que o mouse entrou
        //* Isso faz com que ele gire e permaneça virado
        card.classList.add("flipped");
    });
});