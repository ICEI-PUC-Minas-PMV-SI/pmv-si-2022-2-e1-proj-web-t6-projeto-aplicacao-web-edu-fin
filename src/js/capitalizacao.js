var Calc = function ( ValorTotalapagar, InvestimentoInicial, DuracaoMeses, InvestimentoMensal, total) {
    var calc1 = (ValorTotalapagar - InvestimentoInicial) / DuracaoMeses 
    var total = (ValorTotalapagar - InvestimentoInicial) / InvestimentoMensal 

    return {
        calc1 : calc1,
        total : total
    };
}
document.forms[1].onsubmit = function(e) {
    e.preventDefault();

    var userValorTotalapagar = +document.forms[1].ValorTotalapagar.value;
    var userInvestimentoInicial = +document.forms[1].InvestimentoInicial.value;
    var userDuracaoMeses = +document.forms[1].DuracaoMeses.value;
    var userInvestimentoMensal = +document.forms[1].InvestimentoMensal.value;
    var custos = Calc(userValorTotalapagar, userInvestimentoInicial, userDuracaoMeses, userInvestimentoMensal);

    var calculo = document.getElementById("calculare"); 
    let texto = "";
    if (custos.calc1 > userInvestimentoMensal){
        texto =  " Você deve repensar a sua compra. Se quiser paga-la em " + (userDuracaoMeses) + " meses você deve investir R$" + (custos.calc1).toFixed(2) + " por mês. Caso queira investir apenas R$" + (userInvestimentoMensal) + " mensais, você vai pagar seu valor final em " + (custos.total) + " meses ";
     }else{
        texto =  " Você atingirá seu objetivo! Se quiser juntar o valor total, isso pode durar  " + (userDuracaoMeses) + " meses. "; 
     }
     
    calculo.innerHTML = "Resultado: " + texto;   
};

