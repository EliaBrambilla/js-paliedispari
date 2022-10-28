/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


const pariDispari = prompt('pari o dispari');
const numUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
const numPc= random(1, 5);
const somma = numUtente + numPc;

const risultato = (somma % 2) ? 'DISPARI' : 'PARI';
const vincitore = controllo(sceltaUtente, risultato);

function random (max, min){
  return  Math.floor(Math.random() * (max - min +1)) + min;
}

function controllo(scelta, pari_dispari){
  if(scelta.toUpperCase() === pari_dispari) return 'Vince l\'utente';
  return 'Vince il computer';
 }

 function checkPariDispari(num){
  if(num % 2) return 'DISPARI';
  return 'PARI';
 }
