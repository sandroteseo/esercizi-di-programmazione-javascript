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
function isPrime(n) {
  if (n <= 1) {
      return false;
  };
  for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          return false;
      };
  };
  return true;
};

function printFirstNPrimes(m) {
  let count = 0;
  let num = 2;
  while (count < m) {
      if (isPrime(num)) {
          console.log(num);
          count++;
      };
      num++;
  };
};

console.log(isPrime(digit));
printFirstNPrimes(digit);
