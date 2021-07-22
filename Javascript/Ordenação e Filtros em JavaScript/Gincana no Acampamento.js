let terminado = 0

while (terminado !== 1 ) {
  let totalItems = parseInt(gets())
  
  if (totalItems === 0) {
      terminado = 1
  } else {
    let estudantes = [];

    for (let i = 0; i < totalItems; i++){
      let arr = gets()
      let nome_e_numero = arr.split(" ")
      let nome = nome_e_numero[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      
      if (nome.length > 30) nome = nome.substring(0,30)
      
      let numero = parseInt(nome_e_numero[1])
      estudantes.push({ nome, numero })   
    }  
    let numeroDoCirculo = estudantes[0].numero
    estudantes.reverse()

    let alvo = 0
    let rodadas = 0

    while (estudantes.length !== 1)  {
      let circulo = []
      
      if (numeroDoCirculo % 2 === 0) {  
        for (let i = 0 ; i < numeroDoCirculo; i++) {
            
          if (rodadas === 0) alvo = 0
          if (alvo >= estudantes.length) alvo = 0
          circulo[i] = estudantes[alvo]
          rodadas++

          if (i === numeroDoCirculo - 1 && circulo[circulo.length - 1].numero % 2 === 0) {
            alvo
          } else if (i === numeroDoCirculo - 1 && circulo[circulo.length - 1].numero % 2 !== 0) {
              alvo--
          } else {
              alvo++
          }
        }
      } else { 
          for (let i = 0 ; i < numeroDoCirculo; i++) {
            if (rodadas === 0) alvo = estudantes.length - 2
            if (alvo < 0) alvo = estudantes.length - 1
            circulo[i] = estudantes[alvo]
            rodadas++
            
            if (i === numeroDoCirculo - 1 && circulo[circulo.length - 1].numero % 2 === 0) {                
            } else {
                alvo--
              }
          }
        }
      numeroDoCirculo = circulo[circulo.length - 1].numero
      
      let index = estudantes.indexOf(circulo[circulo.length - 1])
      estudantes.splice(index,1)            
    }
    console.log(`Vencedor(a): ${estudantes[estudantes.length - 1].nome}`)     
  }
}

//Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.