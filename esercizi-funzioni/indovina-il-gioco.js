/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/
var n=6;

function numbers (integer) {
  if (integer>=1 && integer<=7) {
    return integer;
  } else {
    return 'FALSE';
  }
}

var num=numbers(n);

function week (day) {
  switch(day) {
      
    case 1:
      console.log('1: Lunedì');
      break;
    case 2:
      console.log('2: Martedì');
      break;
    case 3:
      console.log('3: Mercoledì');
      break;
    case 4:
      console.log('4: Giovedì');
      break;
    case 5:
      console.log('5: Venerdì');
      break;
    case 6:
      console.log('6: Sabato');
      break;
    case 7:
      console.log('7: Domenica');
      break;
    default:
      console.log('Peccato, non posso indovinare il giorno.');
      
    }
}

week(num);