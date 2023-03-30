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
var one = 15, two = 30, three = 15;

function thePsychic (a, n, b) {
  var first = Math.abs(a - n);
  var second = Math.abs(b - n);

  if (first === second) {
    return 0;
  } else {
    if ( second<first) {
      return 1;
    } else {
      if (first<second) {
        return -1;
      }
    }
  }
}

console.log(thePsychic(one, two, three));

/*

var one = prompt("il primo giocatore inserisce un numero:");
var num = Math.floor(Math.random() * (100 - 1) + 1);
var two = prompt("il secondo giocatore inserisce un numero:");

function thePsychic (a, n, b) {
  var first = a - n;
  var second = b - n;

  if (first === 0) {
    return 'il primo';
  } else {
    if ( second === 0) {
      return 'il secondo';
    } else {
       return 'nessun';
    }
  }
}

console.log(`${thePsychic(one, num, two)} giocatore ha vinto, è stato estratto il numero ${num}`);
*/