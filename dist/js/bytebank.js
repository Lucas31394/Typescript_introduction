var saldo = 3000;
var saldoElemento = document.querySelector(".saldo-valor .valor");
if (saldoElemento != null) {
    saldoElemento.textContent = saldo.toString();
}
var formularioTransacao = document.querySelector(".block-nova-transacao form");
formularioTransacao.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!formularioTransacao.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = formularioTransacao.querySelector("#tipoTransacao");
    var inputValor = formularioTransacao.querySelector("#valor");
    var inputData = formularioTransacao.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
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
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    formularioTransacao.reset();
});
