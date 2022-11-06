
//pega url
function apiGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
//executa os metodos
function main(){
    //pega api
    let data = apiGet("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    //converte para json
    let dados = JSON.parse(data);
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
