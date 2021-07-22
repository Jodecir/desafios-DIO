var n = parseInt(gets());

function calcularDias(qtdComida) {
  if (qtdComida <= 1.0) {
    return 0;
  }
  const consumoComida = qtdComida / 2.0;
  
  return 1 + calcularDias(consumoComida);
}

while (n-- > 0) {
  var qtdComida = parseFloat(gets());
  let dias = calcularDias(qtdComida);
  console.log(dias, `  dias`);
}

//No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu suprimento de comida disponível todos os dias. Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg), e calcule quantos dias passarão antes que Blobs coma todo esse suprimento até restar um quilo ou menos.

//A primeira linha de entrada contem um único inteiro N (1 ≤ N ≤ 1000), indicando o número de casos de teste. As N linhas seguintes contém um valor de ponto flutuante C (1 ≤ C ≤ 1000) correspondente à quantidade de comida disponível para Blobs.