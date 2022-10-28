const parola = prompt('Inserisci la parola');
const parolaInversa = invertiParola(parola);

//confronto per vedere se il risulatato della funzione == alla parola
if(parola == parolaInversa){
  console.log('la parola è palindroma');
}else {
  console.log('la parola non è palindroma');
}







// creo la mia funzione per inviertire la parola
function invertiParola(parola) {
  var parolaInvertita = '';
  for( let i = parola.length-1; i >= 0; i--){
    parolaInvertita += parola[i];
    
  }
  return parolaInvertita;

}