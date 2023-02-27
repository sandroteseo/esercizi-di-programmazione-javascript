/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5 
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
let n = 7;

// Controllo se il numero è dispari
if (n % 2 === 0) {
  console.log("Il numero deve essere dispari.");
} else {
  let diamond = "";

  // Stampa la metà superiore del rombo
  for (let i = 0; i < Math.floor(n/2) + 1; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j >= Math.floor(n/2) - i && j <= Math.floor(n/2) + i) {
        row += "X";
      } else {
        row += " ";
      }
    }
    diamond += row + "\n";
  }

  // Stampa la metà inferiore del rombo
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j >= Math.floor(n/2) - i && j <= Math.floor(n/2) + i) {
        row += "X";
      } else {
        row += " ";
      }
    }
    diamond += row + "\n";
  }

  console.log(diamond);
}
