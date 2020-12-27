let totalItems = gets();
let estudantes = [];

for (let i = 0; i < totalItems; i++){
    let nome = gets();
    let uniforme = gets();
    let cor_e_tamanho = uniforme.split(" ");
    let cor = cor_e_tamanho[0];
    let tamanho = cor_e_tamanho[1];

    estudantes.push({ nome, cor, tamanho });
}

estudantes.sort((a,b) => (a.cor > b.cor) ? 1 : (a.cor === b.cor) ? (a.tamanho < b.tamanho) ? 1 : (a.cor === b.cor) && (a.tamanho === b.tamanho) ? (a.nome > b.nome) ? 1 : -1 : -1 : -1);

estudantes.map(estudante => console.log(estudante.cor, estudante.tamanho, estudante.nome));

//O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.