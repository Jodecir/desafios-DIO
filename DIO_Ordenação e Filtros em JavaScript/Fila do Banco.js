let totalItems = parseInt(gets())

for (let i = 1; i <= totalItems; i++) {
  let mesmoLugar = 0 
  let clientesQtd = parseInt(gets())
  let arr = (gets()).split(" ").map((arr) => arr) //Chegada clientes
  let arrOrder = arr.map((arr) => arr).sort(sortNum)

  //Ordena em ordem descrescente
  function sortNum(a, b){
      return (b - a) //decrescente
  }
  //compara e calcula os valores que são iguais e que não vão mudar de posição
  for (let j = 0; j < clientesQtd; j++) {
      if ( arr[j] === arrOrder[j]) {
          mesmoLugar++
      }
  }
  console.log(mesmoLugar)
}

//Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. Sendo, aqueles com número maior deverão ser atendidos primeiro.

//Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.