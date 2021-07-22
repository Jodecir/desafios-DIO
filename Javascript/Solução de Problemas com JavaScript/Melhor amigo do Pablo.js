getsLinha = [];
while((linha = gets()) != "FIM")  getsLinha.push(linha);

listYesStudents = [];
listStudents = [];

for (i in (semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem)))) {
  arrAux = semItensRepetidos[i].split(" ");
  
  listStudents.push({nome: arrAux[0], valor: arrAux[1]}); 
  /*armazena os que votaram em SIM*/
  if (arrAux[1] === 'SIM') listYesStudents.push({nome: arrAux[0], valor: arrAux[1]}); 
}

//Ordena a listStudents e imprime valor
listStudents.sort((a,b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
           .map(item => console.log(item.nome));

//Ordena a lista dos que votaram em SIM, referente a quantidade de letras do primeiro nome e imprime o vencedor.
listYesStudents.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + listYesStudents[0].nome);

//Todo final de ano ocorre uma festa na escola. As inscrições para participar da festa são abertas no início de julho. No momento da inscrição, o aluno pode escolher se quer ser "O Amigo do Pablo" na festa ou não. O mais lógico seria escolher a opção Sim, afinal, é um privilégio ser O Amigo do Pablo, já que ele é a pessoa mais descolada da escola. Porém, há indivíduos que definitivamente não pretendem ser O Amigo do Pablo, e por motivos desconhecidos.
//Somente um será o escolhido. Em vista disso, muitos alunos que escolheram a opção Sim realizaram a inscrição diversas vezes para aumentar a própria probabilidade de ser O Amigo do Pablo. A diretora da escola pediu que você desenvolva um programa que organize as inscrições do site, pois está havendo um spam de inscrições. O critério para ser o escolhido é a quantidade de letras do primeiro nome, e em caso de empate, vence aquele que realizou primeiro a inscrição. A organização final dos inscritos deverá seguir a ordem de escolha (Sim ou Não), mas respeitando a ordem alfabética.
//OBS.: Ninguém que escolheu a opção Não realizou a inscrição mais de uma vez

//A entrada contém somente um caso de teste. Cada linha é composta pelo primeiro nome do participante (sem espaços), seguido da opção SIM (caso o usuário queira ser O Amigo do Pablo) ou NAO (caso não queira). A entrada termina assim que o usuário digita "FIM" (sem as aspas).

//Seu programa deverá imprimir os inscritos pela ordem de escolha e por ordem alfabética, seguido do nome do vencedor. Imprima uma linha em branco entre a lista de inscritos e o nome do vencedor.