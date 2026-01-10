const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== "") {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'

        } else if (valorIMC < 25) {

            classificacao = 'com peso ideal, parabens';
        } else if (valorIMC < 30) {

            classificacao = 'esta levemente acima do peso';
        } else if (valorIMC < 35) {

            classificacao = 'esta com obesidade grau 1';
        } else if (valorIMC < 40) {

            classificacao = 'esta com obesidade grau 2';
        } else {
            classificacao = 'esta com obesidade grau 3, cuidado';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;

    } else {
        resultado.textContent = 'preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);