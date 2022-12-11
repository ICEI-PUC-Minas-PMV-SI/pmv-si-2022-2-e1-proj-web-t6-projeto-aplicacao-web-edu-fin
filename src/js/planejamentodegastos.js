var mat = function ( RendaMensal, calc3) {
    var calc1 = RendaMensal * 0.5
    var calc3 = RendaMensal * 0.3
    var calc2 = RendaMensal * 0.2

    return {
        calc1 : calc1,
        calc2 : calc2,
        calc3 : calc3
    };
}
document.forms[2].onsubmit = function(e) {
    e.preventDefault();

    var userRendaMensal = +document.forms[2].RendaMensal.value;

    var precos = mat(userRendaMensal);

    var conta = document.getElementById("calcularia"); 
    let texto = "";
    if (precos.calc1 > 1){
        texto =  " Custos Essenciais: R$" +  (precos.calc1).toFixed(2) + ", custos Pessoais: R$" + (precos.calc3) + ", Custos Investidos: R$" + (precos.calc2) ;
     }else{
        texto =  "Não é possível fazer o seu cálculo"; 
     }
     
    conta.innerHTML = "" + texto;   
};