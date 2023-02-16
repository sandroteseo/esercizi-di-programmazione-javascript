/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/
var birthday = {
  day: 19,
  month: 7,
  year: 1975
}
 var date1=new Date();
if (birthday==date1) {
  console.log(date1);
} else {
  console.log("La data non è valida!");
}
