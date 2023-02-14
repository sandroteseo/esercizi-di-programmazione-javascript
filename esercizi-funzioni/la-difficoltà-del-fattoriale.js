/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

function factorial (num) {
  var f=1;

  for (var i=1; i<=num; i++) {
    f=f*i;
  }

  return f;
}
var rand=Math.floor(Math.random()*10) + 1;
console.log(`il fattoriale di ${rand} è : `);
console.log(factorial(rand));


