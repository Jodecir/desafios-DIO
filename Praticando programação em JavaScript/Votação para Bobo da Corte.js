const n = parseInt(gets());
let rafael = parseInt(gets())
let temp = rafael;

while (true) {
  let x = parseInt(gets())
  
  if (!x) {
    rafael >= temp
    ?console.log("S")
    :console.log("N")
    break;
  }
  
  if (x > temp) {
    temp = x;
  }
}

//O Império dos Artificialistas é governado por um generoso Monarca. A personalizada do Monarca é conhecida por todo o mundo, principalmente por sua forma como valoriza o bom humor de seu povo, que tem o direito a diversidade cultura. Um dos destaques fica a cargo do bobo da corte, eleito anualmente em um concurso internacional.

//O jovem Rafael é um comediante promissor, que sonha em se tornar o bobo da corte nesse grande concurso. Para isso, ele vem se preparando com muita dedicação há vários meses. Chegada a época do concurso do bobo da corte, um total de N candidatos se inscreveram, e como Rafael sabia que ser o primeiro candidato a se inscrever torna-se critério de desempate, foi o primeiro a se inscrever! O concurso dará apenas 5 minutos para cada participante e no final cada cidadão dará seu voto ao futuro bob da corte que achar melhor.

//Sendo assim, após a votação, resta apenas apurar os resultados, que será realizado por urna eletrônica com N inteiros, correspondentes ao total de votos em cada candidato, ordenado pela ordem de inscrição. Sua missão é determinar se o jovem Rafael foi eleito ou não.