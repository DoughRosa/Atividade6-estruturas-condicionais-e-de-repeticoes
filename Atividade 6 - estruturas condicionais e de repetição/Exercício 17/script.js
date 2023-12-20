let eleitores = Number(prompt("Digite o número de eleitores do município: "));
let validos = Number(prompt("Digite o número de votos válidos: "));
let nulos = Number(prompt("Digite o número de votos nulos: "));
let brancos = Number(prompt("Digite o número de votos brancos: "));

if((validos+nulos+brancos)>eleitores){
    document.write("Há mais votos totais do que eleitores no município!");
} else {
    document.write(`${nulos} Votos nulos representam ` + (nulos/eleitores)*100 + "%<br>");
    document.write(`${brancos} Votos brancos representam ` + (brancos/eleitores)*100 + "%<br>");
    document.write(`${validos} Votos validos representam ` + (validos/eleitores)*100 + "%<br>");
 }