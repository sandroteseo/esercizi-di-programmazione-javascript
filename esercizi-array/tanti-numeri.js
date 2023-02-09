/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var a=[3, 5, 10, 2, 8];
var amin=[];
var asup=[];
var media= (a[0]+a[1]+a[2]+a[3]+a[4])/5;
console.log(media);
a.forEach(function(item,){
  if (item<media) {
    amin.push(item);
  } else {
    asup.push(item);
  }
});
console.log(amin);
console.log(asup);