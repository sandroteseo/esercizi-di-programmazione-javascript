/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7;
console.log(`la giornata più caldo = ${Math.max(a, b, c, d, e, f, g)}, la giornata più fredda = ${Math.min(a, b, c, d, e, f, g)}`);
