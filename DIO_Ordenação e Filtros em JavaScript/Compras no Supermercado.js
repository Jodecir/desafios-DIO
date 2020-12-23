let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
  let itens = gets().split(" ");
  let itensOrdenados = new Set(itens)
  let itensUnicos = itensOrdenados;
  let resposta = [...itensUnicos].sort().toString().replace(/,/g," ");
  console.log(resposta);
}

//Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas doméstica. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

//O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.
