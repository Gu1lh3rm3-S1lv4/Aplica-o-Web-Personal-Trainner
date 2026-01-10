//carrega o arquivo html
document.addEventListener('DOMContentLoaded', function () {

    if (window.location.hash !== "") {
        window.location.hash = '';
    }

    //LOGICA DO BOTAO DE VOLTAR AO TOPO
    const BackUpButton = document.getElementById('BackUpButton');

    function backButton() {
        //vaariavel
        const scrollPosition = window.scrollY;
        if (
            scrollPosition > 100//Se o usuário rolar mais de 100px, o botão aparece:
        ) {
            BackUpButton.style.display = 'flex';//torna o botão visível.
            setTimeout(() => {
                BackUpButton.style.opacity = '1';
            }, 10);//depois de 10ms, criando um efeito de transição suave.
        } else {
            BackUpButton.style.opacity = '0';//botão começa a sumir.
            setTimeout(() => {
                BackUpButton.style.display = 'none';//após 500ms, botão desaparece da página.
            },)
        }
    }

    document.addEventListener('scroll', backButton);//Chama a função backButton() toda vez que o usuário rola a página.

    BackUpButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });//a página rola suavemente até o topo
    });

/**BOTAO WHATSAPP**/
const btnWhats = document.getElementById('btnWhats');

/*FUNÇÃO DE POSICAO DE VISIBILIDADE DO BTN*/
function whats() {
    const scrollPosition = window.scrollY;
    if( scrollPosition > 100){
        btnWhats.style.display = 'flex';
        setTimeout(() => {
            btnWhats.style.opacity = '1';
        }, 10);
    }else{
        btnWhats.style.opacity = '0';
        setTimeout(() => {
            btnWhats.style.display = 'none';
        },)
    }
}
/*FUNÇÃO DE CLICK E REDIRECIONAMENTO*/
document.addEventListener('scroll', whats);

btnWhats.addEventListener('click', function (){
    window.location.href =  'https://wa.me/5511974895522'
});
});