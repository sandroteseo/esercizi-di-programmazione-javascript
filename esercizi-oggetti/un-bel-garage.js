/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/
var car = {
  mark: 'Toyota',
  model: 'Yaris'
}
var garage=['Toyota Yaris', 'Toyota Prius', 'Toyota Corolla', 'Toyota Aygo', 'Fiat Panda', 'Fiat Punto'];
var auto= garage.filter(item => item.includes(car.mark));
console.log(auto);
