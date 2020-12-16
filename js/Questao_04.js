/**
 * 
 */

class Aluno {
  constructor(nome, sobrenome, nota1, nota2) {
    this.primeiroNome = nome;
    this.segundoNome = sobrenome;
    this.primeiraNota = nota1;
    this.segundaNota = nota2;     
  }
  nomeCompleto() {
	  return (this.primeiroNome + " " + this.segundoNome);
  }
  media(){
	  return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);	  
  }
  situacao(){
	  if (this.media() > 6){
		  return 'Aprovado';
	  }
	  return 'Reprovado';
  }
}

function criarAlunos(){
	var alunos = [new Aluno('Fabio', 'Teixeira', 8, 8.5),
		          new Aluno('Fabiano', 'Teixeira', 7, 2)];	
	
	alunos.forEach(mostrarAlunos);
}

function mostrarAlunos(item, index) {
	  alert("Nome completo: " + item.nomeCompleto() + "\n" + 
			"Média: " + item.media() + "\n" + 
			"Situação: " + item.situacao());
}

criarAlunos();

