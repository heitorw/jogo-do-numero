function verificaSeOChutePossuiUmValorValido(chute) {

    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return false;
    }

    if (numeroForMaiorQueOMaximo(numero)) {
        elementoChute.innerHTML += '<div>Valor maior que o máximo permitido</div>'
        return false;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
        return true;
    }else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div class="dica">O número secreto é maior
            <i class="fa-regular fa-circle-up fa-bounce fa-xl"></i>
        </div>
        `;
        return false;
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div class="dica">O número secreto é menor
            <i class="fa-regular fa-circle-down fa-bounce fa-xl"></i>
        </div>
        `;
        return false;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOMaximo(numero) {
    return numero > maiorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})