let N = parseInt(gets());
let palavras = Array(N);

for (var i = 0; i < N; i++) {
  N = parseInt(gets())
  if (1 > N >= 0 ) {
    palavras[i] = N
  }
}

maiores = palavras.filter(value => value > N == 0).sort((a, b) => a-b)
menores = palavras.filter(value => value < N == 0).sort((a, b) => b-a)

maiores.forEach(i => console.log(i))
menores.forEach(i => console.log(i))

//Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.