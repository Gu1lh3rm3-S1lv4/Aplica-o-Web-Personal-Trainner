function openModal() {
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal-container' || e.target.id == "fechar") {
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}

//EVENTO DE CORES NA BORDA DOS INPUTS E TEXTAREA*/

// pega todos os inputs e textarea do formulário
const campos = document.querySelectorAll("form input, form textarea");

campos.forEach(campo => {
    // quando clicar no campo
    campo.addEventListener("focus", () => {
        campo.style.border = "2px solid #06d6a0";
        campo.style.outline = "none"; // tira o contorno padrão
    });

    // quando sair do campo
    campo.addEventListener("blur", () => {
        campo.style.border = "1px solid #ccc"; // volta ao normal
    });
});