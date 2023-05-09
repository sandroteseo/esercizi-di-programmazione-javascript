/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/
var contatto0 = {
  nome: 'Sandro',
  cognome: 'Teseo',
  numero: '3795322031',
  relazione: 'amico'

}

var contatto1 = {
  nome: 'Luca',
  cognome: 'Bianchi',
  numero: '0652438700',
  relazione: 'cugino'

}

var contattonew= {
  nome: 'Mario',
  cognome: 'Rossi',
  numero: '3283476551',
  relazione: 'amico'

}

var rubrica = {
  elenco: [contatto0],

  stampaRub() {
    return this.elenco; 
  },

  nuovoCont(name) {
    this.elenco.push(name);
    return this.elenco;
  },

  modCont(x) {
  
    this.elenco[x] = contattonew;
    return this.elenco;
  },

  cancCont(y) {
    
  this.elenco[y] = 0;
  return this.elenco;
},

ricerca(name) {
  this.elenco.slice(item => {
    if (item.nome === name)
       item;
  });
  return this.elenco;
},


}

const first = rubrica.stampaRub();
const second = rubrica.nuovoCont(contatto1);
const third = rubrica.modCont(1); 
const fourth = rubrica.cancCont(1);
const fifth = rubrica.ricerca('Sandro');
console.log(first);  
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
