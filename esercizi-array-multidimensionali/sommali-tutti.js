/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

let N = 2; // input
let M = 3; // input

let matrice = [];
let somma = 0;

for (let i = 0; i < N; i++) {
    let riga = [];
    for (let j = 0; j < M; j++) {
        let casuale = Math.floor(Math.random() * 100) + 1;
        riga.push(casuale);
        somma += casuale;
    }
    matrice.push(riga);
}

console.log("matrice =", matrice);
console.log("somma =", somma);