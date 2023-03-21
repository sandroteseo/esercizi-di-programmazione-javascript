/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/
// Prende in input due numeri, N e M.
var N = 2;
var M = 3;

// Genera una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
var matrice = [];
for (var i = 0; i < N; i++) {
  var riga = [];
  for (var j = 0; j < M; j++) {
    var valore = Math.floor(Math.random() * 100) + 1;
    riga.push(valore);
  }
  matrice.push(riga);
}

// Dichiara due array, l'array R di N elementi e l'array C di M elementi.
var R = [];
var C = [];

// Salva, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
for (var i = 0; i < N; i++) {
  var sommaRiga = 0;
  for (var j = 0; j < M; j++) {
    sommaRiga += matrice[i][j];
    if (i == 0) { // Inizializza l'array C con zeri
      C.push(0);
    }
    C[j] += matrice[i][j]; // Aggiorna l'array C con la somma delle colonne
  }
  R.push(sommaRiga); // Aggiunge l'array R la somma della riga corrente
}

// Stampa la matrice e i due array.
console.log("matrice =", matrice);
console.log("array R =", R);
console.log("array C =", C);