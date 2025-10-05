// Espera o DOM estar carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões "Ler mais"
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Adiciona evento de clique a cada botão
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Encontra o post mais próximo do botão clicado
            const post = button.closest('.list-footer');

            // Seleciona o conteúdo do post
            const content = post.querySelector('.post-content');

            // Alterna a classe 'visible' para mostrar ou esconder o conteúdo
            content.classList.toggle('visible');

            // Atualiza o texto do botão conforme o estado do conteúdo
            button.textContent = content.classList.contains('visible')
                ? 'Ler menos'  // Se o conteúdo estiver visível
                : 'Ler mais';  // Se o conteúdo estiver oculto
        });
    });

});

/*condição ? valorSeVerdadeiro : valorSeFalso
condição → algo que resulta em true ou false
? → lê-se como “então”
: → lê-se como “senão”*/
