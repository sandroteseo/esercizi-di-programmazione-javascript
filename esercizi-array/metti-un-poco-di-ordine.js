/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

var array = [];
for (var i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100 - 50));
}

// Stampa l'array originale
console.log("Array originale: " + array);

// Ordina l'array in modo decrescente usando il bubble sort
var n = array.length;
var swapped;
do {
  swapped = false;
  for (var i = 0; i < n - 1; i++) {
    if (array[i] < array[i + 1]) {
      // Scambia gli elementi se il primo è minore del secondo
      var temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swapped = true;
    }
  }
} while (swapped); // Ripeti finché ci sono scambi

// Stampa l'array ordinato
console.log("Array ordinato: " + array);