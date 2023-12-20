let preco = Number(prompt("Digite o preço do produto: "));
let parcela = Number(prompt("Digite o número de parcelas: "));

if(parcela==1){
    document.write("o preço do produto é R$ ", (preco*0.975).toFixed(2), ".");
} else if(parcela>=2 && parcela<=5){
    document.write("o preço do produto é R$ ", (preco).toFixed(2), ".<br> A serem pagos em ", parcela, "x de R$ ", (preco/parcela).toFixed(2));
} else if(parcela>=6 && parcela<=10){
    document.write("o preço do produto é R$ ", (preco*1.06).toFixed(2), ".<br> A serem pagos em ", parcela, "x de R$ ", (preco*1.06/parcela).toFixed(2));
} else if(parcela>=11 && parcela<=15){
    document.write("o preço do produto é R$ ", (preco*1.13).toFixed(2), ".<br> A serem pagos em ", parcela, "x de R$ ", (preco*1.13/parcela).toFixed(2));
} else {
    document.write("Número de parcelas digitado é inválido!")
}