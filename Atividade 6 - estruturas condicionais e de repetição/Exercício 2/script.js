let idade = Number(prompt("Digite sua idade: "));
let habilitado = prompt("Você é habilitado? ")

if(idade>=18 && habilitado == "sim"){
    document.write("Pode dirigir!");
} else {
    document.write("Não pode dirigir!");
}