let turno = prompt("Digite em qual turno você estuda, utilize M, V ou N: ")

switch(turno){
    case "m":
        alert("Bom dia!");
        break;

    case "v":
        alert("Boa tarde!");
        break;
    
    case "n":
        alert("Boa noite!");
        break;

    default:
        alert("Valor inválido!")
}