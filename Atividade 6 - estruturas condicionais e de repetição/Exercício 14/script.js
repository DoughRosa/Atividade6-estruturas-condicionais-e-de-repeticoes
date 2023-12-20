let numero = Number(prompt(`Digite um número:`));
let soma = 0;

      while (soma + numero * 3 < 500) {
        soma += numero * 3;
        numero = numero * 3;
      }

      console.log("O último valor é: " + numero);

      document.write(`O último valor multiplicado por 3 foi: ${numero}`);

