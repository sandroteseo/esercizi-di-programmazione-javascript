/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/
let array = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let transpose = array[0].map((_, colIndex) => array.map(row => row[colIndex]));

console.log(transpose); // [[1, 3, 5], [2, 4, 6]]

/*
In ques7to esempio:

- Il metodo map viene applicato all'array[0], che è il primo elemento dell'array originale e ha due elementi: [1, 2].
- Il primo parametro del metodo map è una funzione anonima che prende due argomenti: _ e colIndex. Il primo argomento _ è il valore dell'elemento corrente dell'array[0], ma non ci interessa. Il secondo argomento colIndex è l'indice dell'elemento corrente dell'array[0], che va da 0 a 1.
- La funzione anonima restituisce un nuovo array creato con il metodo map applicato all'array originale. Questo metodo map prende un solo parametro: row, che è l'elemento corrente dell'array originale. La funzione restituisce row[colIndex], che è l'elemento della riga corrente alla posizione colIndex.
- Il risultato finale è un nuovo array multidimensionale che ha le righe e le colonne scambiate rispetto all'array originale.

Questo metodo funziona solo se tutti gli elementi dell'array originale hanno la stessa lunghezza. Altrimenti potresti ottenere dei valori undefined.
*/