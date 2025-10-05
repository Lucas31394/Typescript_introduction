var saldo = 3000;
const saldoElemento = document.querySelector(".saldo-valor .valor");
if (saldoElemento != null) {
    saldoElemento.textContent = saldo.toString();
}
const formularioTransacao = document.querySelector(".block-nova-transacao form");
formularioTransacao.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!formularioTransacao.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = formularioTransacao.querySelector("#tipoTransacao");
    const inputValor = formularioTransacao.querySelector("#valor");
    const inputData = formularioTransacao.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
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
