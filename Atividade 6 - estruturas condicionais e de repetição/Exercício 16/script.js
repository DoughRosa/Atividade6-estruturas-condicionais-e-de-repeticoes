let anoAtual = Number(prompt("Escreva o ano atual: "));
let anoNascimento = Number(prompt("Escreva o ano do seu nascimento: "));

if (anoAtual-anoNascimento>=16){
    document.write("Pode votar!");
} else {
    document.write("Não pode votar!")
}

