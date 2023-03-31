/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

function calcolaVicinanza(a, b, n) {
  if (Math.abs(n - a) === Math.abs(n - b)) {
    return 0;
  } else if (Math.abs(n - a) > Math.abs(n - b)) {
    return 1;
  } else {
    return -1;
  }
}

// Esempio di utilizzo
const n = Math.floor(Math.random() * 100) + 1; // Genera un numero casuale tra 1 e 100
console.log(`Il numero da indovinare è ${n}`);

let utente1 = parseInt(prompt("Utente 1, inserisci un numero"));
let utente2 = parseInt(prompt("Utente 2, inserisci un numero"));

while (utente1 !== n && utente2 !== n) {
  const vicinanzaUtente1 = calcolaVicinanza(utente1, utente2, n);
  const vicinanzaUtente2 = calcolaVicinanza(utente2, utente1, n);

  if (vicinanzaUtente1 === vicinanzaUtente2) {
    console.log("Pareggio!");
  } else if (vicinanzaUtente1 === -1) {
    console.log("Ha vinto l'utente 1!");
    break;
  } else if (vicinanzaUtente2 === -1) {
    console.log("Ha vinto l'utente 2!");
    break;
  }

  utente1 = parseInt(prompt("Utente 1, inserisci un numero"));
  utente2 = parseInt(prompt("Utente 2, inserisci un numero"));
}