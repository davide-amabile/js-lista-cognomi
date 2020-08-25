// 1. Chiedere il cognome
do {
  var cognomeUtente = prompt("Inserire il suo cognome");
} while (!isNaN(cognomeUtente))

// 2. Creare lista array con cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "balsano", "verdi"];

// 3. Inserire cognome utente nella array
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

//4. Ordinare in ordine alfabetico la lista dei cognomi
listaCognomi.sort();
console.log(listaCognomi);

// trovare la posizione del cognomeUtente
console.log("Il cognome occupa la posizione:" + listaCognomi.indexOf(cognomeUtente));

document.getElementById("posizione").innerHTML = "Il tuo cognome &eacute; nella posizione:" + " " +  listaCognomi.indexOf(cognomeUtente);
