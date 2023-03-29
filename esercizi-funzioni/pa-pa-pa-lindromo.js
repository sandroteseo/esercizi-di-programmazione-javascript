/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/
var string = 'I topi non avevano nipoti.';
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]+/g,"");
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome(string));

