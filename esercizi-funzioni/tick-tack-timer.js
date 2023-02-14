/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/
function counter (start) {

 while (start > 0) {
    start=start-1;
    console.log(start);
    }
  
  
}
counter(8);
