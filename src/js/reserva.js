var Reserva = function (montante, porcentagem, meses) {
    var taxa = parseFloat(porcentagem / 100);
    var total = parseFloat(montante * taxa * meses);

    return {
        taxa : taxa,
        total : total
    };
}

document.forms[0].onsubmit = function(e) {
    e.preventDefault();

    var userMontante = +document.forms[0].montante.value;
    var userPorcentagem = +document.forms[0].porcentagem.value;
    var userMeses = +document.forms[0].meses.value;
    var custos = Reserva(userMontante, userPorcentagem, userMeses);

    var result = document.getElementById("calculo");
    result.innerHTML = "Você vai acumular o total de R$" + (custos.total).toFixed(2) + " reais em " + userMeses + " meses";
};


