let cases = parseInt(gets()); // Receiving amount cases
let arrivingSeparated = []; 

for (let i = 0; i < cases; i++) {
    arrivingSeparated[i] = gets() // Receiving cases
            .split(' ') // Separating words
            .sort((a, b) => (b.length > a.length) ? 1 : // Order by length
                (b.length === a.length)  ? (a > b) -1 : -1) // Order by ASC
            .toString()
            .replace(/,/gi, " ")
}
for (sentence in arrivingSeparated) console.log(arrivingSeparated[sentence]);

//Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.