/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/
var date=28;
var day=2;



  for (var i=1; i<=date; i++) {
    var today=i;

   
    if (day<=6) {
      switch(day) {
      
        case 0:
          console.log('Lun '+ today);
          break;
        case 1:
          console.log('Mar '+ today);
          break;
        case 2:
          console.log('Mer '+ today);
          break;
        case 3:
          console.log('Gio '+ today);
          break;
        case 4:
          console.log('Ven '+ today);
          break;
        case 5:
          console.log('Sab '+ today);
          break;
        case 6:
          console.log('Dom '+ today);
          break;
         
        }
      day++;
    } else {
      day=0;
      console.log('Lun '+ today);
      day++;
    }
  }
