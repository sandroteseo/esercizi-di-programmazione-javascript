/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
var oddnum=5;
for (var i=1; i<=5; i++) {
  var string = 'x'; 
  while(string.length>0) {
    if (string.length<5) {
    console.log(string + '\t');
    string=string + string.repeat(2); 
    }
  }
}