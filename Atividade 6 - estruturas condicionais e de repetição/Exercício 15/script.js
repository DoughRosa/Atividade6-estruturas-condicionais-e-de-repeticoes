let a = Number(prompt("Digite o lado A do triangulo: "));
let b = Number(prompt("Digite o lado B do triangulo: "));
let c = Number(prompt("Digite o lado C do triangulo: "));

if(a<b && b<a+c && c<a+b){
    document.write("É um triangulo!");
} else if((a==b && a!==c) || (a==c && a!==b) || (b==c && b!==a)){
    document.write("Isósceles!");
} else if(a!==b && a!==c && b!==c){
    document.write("Escaleno!");
} else if (a==b && a==c && b==c){
    document.write("Equilátero!")
} else {
    document.write("Não é um triangulo!")
}