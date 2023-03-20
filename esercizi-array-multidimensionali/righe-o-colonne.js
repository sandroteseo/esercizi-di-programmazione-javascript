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
var n=2, m=3;
var matrix = [];
var R = [];
var C = [];

for (var i=0; i<n; i++) {
  var array = [];
  for (var j=0; j<m; j++) {
    var nums = Math.floor(Math.random() * (100 - 1) + 1);
    array.push(nums);
  }
  matrix.push(array);
}

console.log(matrix);

for (i=0; i<n; i++) {
  var row = matrix[i].reduce((acc, curr) => acc + curr);
  R.push(row);
  
}

console.log(R);

  for (j=0; j<m; j++) {
    var column = matrix[0][j] + matrix[1][j];
    C.push(column);
  }


console.log(C); 