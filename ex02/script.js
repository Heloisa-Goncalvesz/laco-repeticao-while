let soma = 0;
let contador = 0;
let nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou um número negativo para sair):"));
while (nota >= 0) {
    soma += nota;
    contador++;
    nota = parseFloat(prompt("Digite a próxima nota:"));
}
if (contador > 0) {
    let media = soma / contador;
    alert("A média é: " + media);
} else {
    alert("Nenhuma nota válida foi inserida.");
}
