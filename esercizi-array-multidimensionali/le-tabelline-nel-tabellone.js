/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/
var tabellone=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tabellone[0]=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
tabellone[1]=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tabellone[2]=[0, 2, 4, 6, 8 , 10, 12, 14, 16, 18, 20];
tabellone[3]=[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
tabellone[4]=[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
tabellone[5]=[0, 5, 10, 15, 20, 25, 30, 35, 40, 45,50];
tabellone[6]=[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
tabellone[7]=[0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
tabellone[8]=[0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
tabellone[9]=[0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90 ];
tabellone[10]=[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

tabellone.forEach(function(index) {
  console.log(index);
});