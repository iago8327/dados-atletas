class Atletas () {
    construtor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11){
            return `Infantil`;
        }

        if (this.idade >= 12 && this.idade <= 13){
            return `Juvenil`;
        }

        if (this.idade >= 14 && this.idade <= 15){
            return `Intermediário`;
        }

        if (this.idade >= 16 && this.idade <= 30){
            return `Adulto`;
        }

        if (this.idade < 9 || this.idade > 30){
            return `Sem categoria`;
        }
    }

    calculaIMC() {
        let imc = this.altura * this.altura / this.peso;
    }

    calculaMediaValida() {
        let novasNotas = this.notas.sort((a,b) => a - b).slice(1,4);
        let notaBase = 0;
        for (let i = 0; i < novasNotas.length; i++) {
            notaBase += novasNotas[i];
        }
        this.notaBase / this.novasNotas.length;
    }

    obtemNomeAtleta() {
        console.log(this.nome);
    }

    obtemIdadeAtleta() {
        console.log(this.idade);
    }

    obtemPesoAtleta() {
        console.log(this.peso);
    }

    obtemNotasAtleta() {
        console.log(this.notas);
    }

    obtemCategoria() {
        console.log(this.calculaCategoria())
    }

    obtemIMC() {
        console.log(this.caculaIMC());
    }

    obtemMediaValida() {
        console.log(this.calculaMediaValida());
    }
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);