// Espera o DOM estar carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões "Ler mais"
    const readMoreButtons = document.querySelectorAll('.read-more,.read-more-2,.read-more-3,.read-more-4');

    // Adiciona evento de clique a cada botão
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Encontra o post mais próximo do botão clicado
            const post = button.closest('.list-footer,.list-footer2,.list-footer3,.list-footer4');

            // Seleciona o conteúdo do post
            const content = post.querySelector('.post-content');

            // Alterna a classe 'visible' para mostrar ou esconder o conteúdo
            content.classList.toggle('visible');

            // Atualiza o texto do botão conforme o estado do conteúdo
            button.textContent = content.classList.contains('visible')
                ? '\u25B2'  // Se o conteúdo estiver visível
                : '\u25Bc';  // Se o conteúdo estiver oculto
            //unicode em js
        });
        
    });

});

/*condição ? valorSeVerdadeiro : valorSeFalso
condição → algo que resulta em true ou false
? → lê-se como “então”
: → lê-se como “senão”*/
