var saldo = 3000;

const saldoElemento = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (saldoElemento != null) {
    saldoElemento.textContent = saldo.toString();
}

const formularioTransacao = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
formularioTransacao.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!formularioTransacao.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = formularioTransacao.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = formularioTransacao.querySelector("#valor") as HTMLInputElement;
    const inputData = formularioTransacao.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    saldoElemento.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    formularioTransacao.reset();
});