
//pegar url
function apiGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
//executa os metodos criados
function main(){
    //pega dados da api
    let data = apiGet("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    //converte dados para json
    let dados = JSON.parse(data);
    // console.log(dados);
    let a = returnHTLM(dados);
}
function returnHTLM(dados){

    let array = Object.values(dados); //transforma objeto em array

    let cotacao = document.getElementById("cotacao");

    for(i=0; i<array.length; i++){
        let node = document.createElement("ul");

        let name = document.createTextNode(array[i].name);
        node.appendChild(name);

        let cifrao = document.createTextNode(" : R$ ");
        node.appendChild(cifrao);

        let price = document.createTextNode(array[i].bid);
        node.appendChild(price);

        document.getElementById("cotacao").appendChild(node);    
        
    }
}
main();


 


// 'use strict';

// // Funcion cambiar formato numero a moneda   
// function formato(valor) {
//     var centavos = 0;
//     var sum2 = valor;
//     sum2 = sum2.toString().replace(/\$|\,/g, '');

//     if (isNaN(sum2)) {
//         sum2 = 0;
//     }
//     var signo = sum2 == (sum2 = Math.abs(sum2));
//     sum2 = Math.floor(sum2 * 100 + 0.50000000001);
//     centavos = sum2 % 100;
//     sum2 = Math.floor(sum2 / 100).toString();

//     if (centavos < 10) centavos = '0' + centavos;

//     for (var i = 0; i < Math.floor((sum2.length - (1 + i)) / 3); i++) {
//         sum2 = sum2.substring(0, sum2.length - (4 * i + 3)) + '.' + sum2.substring(sum2.length - (4 * i + 3));
//     }
//     return sum2;
// }
// // Fin funcion

// function justNumbers(e) {
//     var keynum = window.event ? window.event.keyCode : e.which;
//     if (keynum == 8 || keynum == 46) return true;

//     return (/\d/.test(String.fromCharCode(keynum))
//     );
// }

// function Calcular() {
//     event.preventDefault();
//     var valor = $("#valor").val();
//     if (valor < 2000) {
//         valor = 2000;
//         $("#valor").val(valor);
//         alert("The minimum amount should be two thousand dollars $ 2000.");
//         $("#valor").val(valor);
//     }
//     var cuota = $("#cuota").val();
//     var meses = $("#meses").find(':selected').val();
//     if (valor != "" && meses != 0) {
//         var tot1 = valor * 0.05;
//         var tot2 = valor / meses;
//         var tot = tot1 + tot2;
//         tot = tot.toFixed(0);
//         tot = formato(tot);
//         $("#cuota").val("$ " + tot);
//     }
// }

// /*=========select=============*/
// var valor, cantidad;

// function select(q) {
//     valor = q.find('option:selected').text();
//     q.parent().children('.valor').text(valor);
// }

// function recorrer_select() {
//     for (var i = 0; i < cantidad.length; i++) {
//         var textoselect = $(cantidad).eq(i).find('option[value=""]').text();
//         $(cantidad).eq(i).parent().find('.valor').text(textoselect);
//     }
// }

// cantidad = $('#form-dos select');
// recorrer_select();
// $('#form-dos select').on('change', function () {
//     select($(this));
// });