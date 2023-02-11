/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/
var a=5, b=12, c=7;

function moreNum (one, two, three) {
  if (one>two && one>three) {
    console.log(one);
  }

  if (two>one && two>three) {
    console.log(two);
  }

  if (three>one && three>two) {
    console.log(three);
  }

}

function lessNum (one, two, three) {
  if (one<two && one<three) {
    console.log(one);
  }

  if (two<one && two<three) {
    console.log(two);
  }

  if (three<one && three<two) {
    console.log(three);
  }

}
console.log('maggiore: ');
console.log(moreNum(a, b, c));
console.log('minore: ');
console.log(lessNum(a, b, c));
