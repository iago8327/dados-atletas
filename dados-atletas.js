class Atleta {
    constructor (nome, idade, peso, altura, notas){
      this.nome = nome
      this.idade = idade
      this.peso = peso
      this.altura = altura
      this.notas = notas
      }
  
    calculaCategoria(){
      if (this.idade >= 9 && this.idade < 12){
                  return `Infantil`;
              }
      
      if (this.idade >= 12 && this.idade < 14){
                  return `Juvenil`;
              }
      
      if (this.idade >= 14 && this.idade < 16){
                  return `Intermediário`;
              }
      
      if (this.idade >= 16 && this.idade < 31){
                  return `Adulto`;
              }
      
      if (this.idade < 9 || this.idade > 30){
                  return `Sem categoria`;
              }
      }
  
    calculaIMC(){
      return this.peso / (this.altura * this.altura);
      }
  
    calculaMediaValida(){
      let novasNotas = this.notas.sort((a,b) => a - b).slice(1,4);
      let notaBase = 0;
      notaBase = novasNotas.reduce(function (total, atual){
        return total + atual;
          });
      return notaBase / novasNotas.length;
              
      }
  
    obtemNomeAtleta() {
      return console.log(`Nome: ${this.nome}`);
          }
      
    obtemIdadeAtleta() {
      return console.log(`Idade: ${this.idade}`);
          }
      
    obtemPesoAtleta() {
      return console.log(`Peso: ${this.peso}`);
          }
      
    obtemNotasAtleta() {
      return console.log(`Notas: ${this.notas}`);
          }
  
    obtemCategoria(){
      return console.log(`Categoria: ${this.calculaCategoria()}`)
      }
  
    obtemIMC(){
      return console.log(`IMC: ${this.calculaIMC()}`);
      }
  
    obtemMediaValida(){
      return console.log(`Média válida: ${this.calculaMediaValida()}`);
      }
  }
  
  const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])
  atleta.obtemNomeAtleta();
  atleta.obtemIdadeAtleta();
  atleta.obtemPesoAtleta();
  atleta.obtemNotasAtleta();
  atleta.obtemCategoria();
  atleta.obtemIMC();
  atleta.obtemMediaValida();