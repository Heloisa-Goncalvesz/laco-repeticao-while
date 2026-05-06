let valor = -1
while (valor < 0 || isNaN(valor)) {
    valor = parseFloat(prompt("Digite um número positivo")) 
if (valor < 0 || isNaN(valor)) {
    alert("Entrada inválida! o número deve ser positivo");
    } 
}
alert("Certo! Você digitou o valor: " + valor);