/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/
var n = 982;

function counter (num) {
  var str = num.toString();
  var result = str.length;
  return result;
}

if (n<=9999) {
  console.log(`il numero ${n} è formato da  ${counter(n)} cifre`);
  } else {
    console.log(`Error!!!`);
  }

