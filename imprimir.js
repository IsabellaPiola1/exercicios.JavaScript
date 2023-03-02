imprimiNumerosPares(10, 20);

function imprimiNumerosPares(numeroInicio, numeroTermino){
    for (let i = numeroInicio; i<=numeroTermino; i +=2)
    {
      console.log(i);
    }
  }
  

  // Arrow function
  const imprimiNumerosPares = (numInicio, numTermino) => {
    //for(let i = numInicio; i < numTermino; i += 2){
        //console.log(i)
    //}
    imprimiNumerosPares(numInicio, numTermino);
  }

  
  console.log("Fim do programa");