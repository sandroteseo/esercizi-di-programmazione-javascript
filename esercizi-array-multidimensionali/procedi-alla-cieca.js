/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var blind=[];
blind[0]=[];
blind[1]=[];
blind[2]=[];
blind[3]=[];
blind[4]=[];

for (var i=0; i<20; i++) {
 blind[0].push(Math.floor(Math.random() * (100-1) + 1));
 blind[1].push(Math.floor(Math.random() * (100-1) + 1));
 blind[2].push(Math.floor(Math.random() * (100-1) + 1));
 blind[3].push(Math.floor(Math.random() * (100-1) + 1));
 blind[4].push(Math.floor(Math.random() * (100-1) + 1));
}
console.log(blind);