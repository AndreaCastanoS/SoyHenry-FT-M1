"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let suma = 0 ;
  for (let i = 0; i< num.length; i++){
  suma = suma + num [i] *2 ** (num.length-1-i);
  }
   return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = '';
  while (num > 0){
    binario =(num % 2) + binario;
    num=Math.floor(num/2);
  }
  return binario;
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
