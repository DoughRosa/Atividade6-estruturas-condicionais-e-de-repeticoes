let altura = Number (prompt("Digite sua altura: "));
let sexo = (prompt("Digite seu sexo, utilizando 1 para masculino e 2 para feminino: "));

switch(sexo){
    case '1':
        document.write("Seu peso ideal é ", ((72.7*altura)-58).toFixed(2), "Kg");
    break; 
    
    case '2':
        document.write("Seu peso ideal é ", ((62.1*altura)-44.7).toFixed(2), "Kg");
    break;
}