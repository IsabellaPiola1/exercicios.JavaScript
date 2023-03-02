//const carro = {
    //"fabricante": "Fiat",
    //"Marca": "Uno",
    //"ano": 2013,
    //"placa": "AAA-1234",
    //"chassi": "h45i3h4h3kh3k3l33",
    //"cor": "branca",
    //imprimir: () => {
        //console.log("Imprimindo dados do carro");
    //}
//}

//carro.imprimir();

class Carro {
    fabricante = "";
    marca = "";
    ano = 0;
    placa = "";
    chassi = "";
    cor = "";

    imprimirDados(){
        console.log("Fabricante: ", this.fabricante);
        console.log("Portas: ", this.quantidadePortas);
    }
}

let c1 = new Carro();
c1.fabricante = "Fiat";
c1.marca = "Uno";
c1.ano = 2013;
c1.imprimirDados();