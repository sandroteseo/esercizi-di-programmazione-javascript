/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/
var num = 123456, nth = 3;

function countPosition(n, k) {
  var negative = -(k);
  var str = n.toString();
  var result = str.at(negative);
  if (k>str.length) {
    return 0;
  } else {
    return result;
  }
}

console.log(countPosition(num, nth));