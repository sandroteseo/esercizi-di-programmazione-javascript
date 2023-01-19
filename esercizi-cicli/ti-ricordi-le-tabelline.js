/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/
var tabellina=5;
console.log('tabellina del 5');
for (var i=0; i<=10; i++) {
  console.log(`5 * ${i} = ${tabellina*i}`);
}