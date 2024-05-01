let valor = parseFloat(window.prompt("Me informe o  valor a ser convertido: "));
let origem = window.prompt("Me informe a origem da moeda: ")
let moedas = window.prompt("Me informe para qual moeda para qual será convertido(USD, EUR ,GBP): ");

switch(origem){
    case "BRL":
        valorConvertido = valor / (moedas ==="USD") ? 5.50 :
        moedas === "EUR" ? 6.60 : 7.50;
    case "USD":
        valorConvertido =  valor * (moedas ==="BRL") ? 5.50 :
        moedas === "EUR" ? 5.50 / 6.50 : 5.50/7.50;
    case "EUR":
        valorConvertido = valor * (moedas ==="BRL") ? 6.60 :
        moedas === "USD" ? 6.50 / 5.50 : 6.50 / 7.50;
    case "GBP":
        valorConvertido = valor * (moedas ==="BRL") ? 5.50 :
        moedas === "USD" ? 7.50 / 5.50 : 7.50 / 6.50;
}

alert("Valor convertido: " + valorConvertido.toFixed(2) + " " +moedas)
