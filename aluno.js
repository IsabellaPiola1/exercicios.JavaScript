class Aluno{
    ra = "";
    nome = "";
    idade = 0;

    imprimirAluno(){
        console.log("RA: ", this.ra);
        console.log("nome: ", this.nome);
        console.log("idade: ", this.idade);
    }
}

let a = 10;
let t = "Texto";
let a1 = new Aluno();
a1.ra = "93960";
a1.nome = "Isabella";
a1.idade = 19;

let a2 = new Aluno();
a2.ra = "94222";
a2.nome = "Gabriel";
a2.idade = 21;

let a3 = a1;

a3.imprimirAluno();
a2.imprimirAluno();