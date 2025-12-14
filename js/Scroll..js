// Cria um novo "observador" que vai monitorar quando os elementos entram ou saem da tela
const myObserver = new IntersectionObserver((entries) => {

    // 'entries' é uma lista de elementos observados que mudaram de estado (visível ↔ invisível)
    entries.forEach((entry) => {

        // Verifica se o elemento está aparecendo na tela
        if (entry.isIntersecting) {

            // Se sim → adiciona a classe "visible" (ativa o efeito no CSS)
            entry.target.classList.add("visible");
        } else {

            // Se não → remove a classe "visible" (faz sumir novamente)
            entry.target.classList.remove("visible");
        }
    })
});
// Seleciona todos os elementos que têm a classe "secao-3"
const elementos = document.querySelectorAll(".secao-3");

// Para cada elemento encontrado...
elementos.forEach((Element) =>
    // ...coloca o "observador" para monitorar esse elemento
    myObserver.observe(Element)
);