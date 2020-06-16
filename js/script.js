/*
l programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
e l’età del passeggero.
Sulla base di queste informazioni dovrà:
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

// richiesta numero Km da percorrere
var km = prompt("Inserisci i Chilometri da percorrere:");
while (isNaN(km) == true || km == 0) {
  if (isNaN(km) == true) {
    alert("Attenzione: inserire solo valori numerici per il Km da percorrere.");
  }
  if (km == 0) {
    alert("Attenzione: inserire una distanza maggiore di 0 Km.");
  }
  km = prompt("Inserisci i Chilometri da percorrere:");
}
console.log(km);

// richiesta età del passeggero
var eta = prompt("Inserisci la tua età:");
while (isNaN(eta) == true || eta == 0) {
  if (isNaN(eta) == true) {
    alert("Attenzione: inserire solo valori numerici per l'età.");
  }
  if (eta == 0) {
    alert("Attenzione: inserire un'età maggiore di 0.");
  }
  eta = prompt("Inserisci la tua età:");
}
console.log(eta);

// calcolo prezzo totale del viaggio
var prezzoBase = 0.21 * km;
// console.log("Prezzo base: " + prezzoBase);
var prezzoBaseArrotondato = Math.round(prezzoBase * 100) / 100;
// console.log("Prezzo base arrotondato: " + prezzoBaseArrotondato);
var sconto20 = (prezzoBaseArrotondato / 100) * 20;
// console.log("Sconto 20: " + sconto20);
var sconto20Arrotondato = Math.round(sconto20 * 100) / 100;
// console.log("Sconto 20 arrotondato: " + sconto20Arrotondato);
var sconto40 = (prezzoBaseArrotondato / 100) * 40;
var sconto40Arrotondato = Math.round(sconto40 * 100) / 100;
var scontoApplicato = 0;

if (eta < 18) {
  prezzo = prezzoBaseArrotondato - sconto20Arrotondato;
  prezzoArrotondato = Math.round(prezzo * 100) / 100;
  scontoApplicato = sconto20Arrotondato;
} else if (eta > 65) {
  prezzo = prezzoBaseArrotondato - sconto40Arrotondato;
  prezzoArrotondato = Math.round(prezzo * 100) / 100;
  scontoApplicato = sconto40Arrotondato;
} else {
  prezzoArrotondato = prezzoBaseArrotondato;
}
console.log(prezzoArrotondato);

// output all'utente del prezzo totale del viaggio
document.getElementById('text1').innerHTML = "In base ai chilometri da percorrere: " + km + " km";
document.getElementById('text2').innerHTML = "E in base alla tua età: " + eta + " anni";
if (scontoApplicato != 0) {
  document.getElementById('text3').innerHTML = "Il prezzo del tuo biglietto è di: " + prezzoArrotondato + " euro. (Sconto applicato: " + scontoApplicato + " euro)";
} else {
  document.getElementById('text3').innerHTML = "Il prezzo del tuo biglietto è di: " + prezzoArrotondato + " euro.";
}
