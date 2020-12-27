let stopped = 0;

do {      
      let password = gets(),
      upperCaseTest = password.toLocaleLowerCase(),
      lowerCaseTest = password.toLocaleUpperCase(), 
      numberTest = password.match(/(\d)/i),
      specialCharTest = password.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
      lenghtTest = password.length >= 6 && password.length <= 32;
  
  if  (password.length === 0) {
    
    } else {
      if (password !== upperCaseTest &&
          password !== lowerCaseTest && 
          password === specialCharTest &&  
          numberTest && lenghtTest) {
            console.log('Senha valida.'); 
      } else { 
            console.log('Senha invalida.');
      }
  }
  	if (password.length === 0 ) stopped = 1;
    
} while (stopped !== 1) 

//Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:

//A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
//A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
//Além disso, a senha pode ter de 6 a 32 caracteres.