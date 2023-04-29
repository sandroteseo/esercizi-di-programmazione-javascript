/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/
const digit = 12;
var array = [];

function primes (num) {
  for (var i=1; i<=num; i++) {
    var n = num%i;
    if (n==0) {
      array.push(i);
    };
  };
  if (array.length==2) {
    return true;
  } else {
    return false;
  };
};


function list (item) {
  var count = [];
  for (var j=1; j<=item; j++) {
    if (primes(j)) {
      count.push(j);
    };
  };
  return count;
};

var box = primes(digit);
console.log(box);


console.log(list(digit));