/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/
var calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month = 3, day = 28;
function summation (m, d) {
  m--;
  if (m>0) {
    var position = calendar.slice(0, m);
    var sum = position.reduce((acc, curv) => acc + curv);
  } else {
    sum = 0;
  }
 
  return sum + d;
}  

console.log(`oggi ${day}/${month} dall'inizio dell'anno sono passati ${summation(month, day)} giorni`);
