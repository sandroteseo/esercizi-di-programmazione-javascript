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
var string = 'x'; 
for (var i=1; i<=oddnum; i++) {
    if (string.length<=oddnum) {
      console.log('\t'+string);
      string='xx'+ string; 
    } else {
      string = string.slice(4);
      console.log('\t'+string);
      string = string.slice(2);
    }
  }
   