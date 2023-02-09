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

blind.forEach(function(index) {
   for (var i=0; i<20; i++) {
     index.push(Math.floor(Math.random() * (100-1) + 1));
    } 
   console.log(index);
});
