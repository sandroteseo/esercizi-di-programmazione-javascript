/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var n=20;
var giocatore1=0;
var giocatore2=0;

for (var i=1; i<=n; i++) {
  var dado=Math.floor(Math.random() * (6-1) + 1);
  var div=i%2;
  if (div===1) {
    giocatore1 = giocatore1 + dado;
  } else {
    if (div===0) {
      giocatore2 = giocatore2 + dado;
    }
  }
}

console.log('punteggio giocatore 1: '+ giocatore1);
console.log('punteggio giocatore 2: '+ giocatore2);
