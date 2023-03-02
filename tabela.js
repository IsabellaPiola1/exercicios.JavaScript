/* 
* Imprimir uma tabela de 30 colunas e 5 linhas no temrinal 
*  
* @author VitorRT 
* github: https:github.com/VitorRT *  
* 
*/

/**   
 Função que irá gerar qualquer caractere em sequência.  
 @params char - String  
 @params quantidadeChar - Number    
 example:  ```js    
 let textSequencia = gerarChar("a",20);    
 console.log(textSequencia);  
 ```  
 @output "aaaaaaaaaaaaaaaaaaaa"  
 @returns String*/
 
 function gerarChar(char, quantidadeChar) {
    let i = 0
    let charText = ""    
    while(i <= quantidadeChar) {
        charText += char;
        i++    
    }
      return charText;
    }

    /**     
     * Função que irá montar e imprir a tabale no terminal    
     * @params numeroColunas: Number, numeroLinhas: Number    
     * example:    ```js    imprimirCabecalho(30,27);    
     * ```    
     * @returns void  
     * */  
    
    function imprimirCabecalho(numeroColunas, numeroLinhas) {
      let columnText =  gerarChar("#", numeroColunas);
      let line = gerarChar(" ", numeroLinhas) + "#";
      console.log(columnText);
      console.log("#",line);
      console.log("#",line);
      console.log("#",line);
      console.log("#",line);
      console.log(columnText);
    }
    imprimirCabecalho(30,27);

    function imprimirTexto(nomeFacul, nomePrograma, nomeAluno){
      let rowText =  gerarChar("Nome faculdade: ", nomeFacul);
      let columnText = gerarChar("Nome Programa: ", nomePrograma);
      let column = gerarChar("Nome Aluno: ", nomeAluno);
      console.log("Nome faculdade: Fiap",rowText);
      console.log("Nome Programa: JavaScript",columnText);
      console.log("Nome Aluno(a): Isabella Piola",column);
    }
    imprimirTexto();