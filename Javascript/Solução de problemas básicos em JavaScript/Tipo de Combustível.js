let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let code = 0;

while (code != 4) {

  code = Number(gets());

  switch (code) {
    case 1:
      alcohol++
      break;

    case 2:
      gasoline++
      break;

    case 3:
      diesel++
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: ", alcohol)
console.log("Gasolina: ", gasoline)
console.log("Diesel: ", diesel)

//Você recebeu desafio para determinar qual dos produtos é o preferêncial dos clientes de um posto de abastecimento de combustível. Para isso você deve escrever um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.