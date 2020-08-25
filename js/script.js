// 1. Chiedere il cognome
do {
  var cognomeUtente = prompt("Inserire il suo cognome");
} while (!isNaN(cognomeUtente))

// 2. Creare lista array con cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 3. Inserire cognome utente nella array
listaCognomi.push(cognomeUtente);
// console.log(listaCognomi);

//4. Ordinare in ordine alfabetico la lista dei cognomi
var listaAlafabeto = listaCognomi.sort();

for ( var i = 0; i < listaAlafabeto.length; i++) {
  var lista = document.getElementById("lista").innerHTML;
  document.getElementById("lista").innerHTML = lista + "<li>" + listaAlafabeto[i] + "</li>";
}

//5. trovare la posizione del cognomeUtente
var posizioneCognome = listaCognomi.indexOf(cognomeUtente) + 1;
document.getElementById("posizione").innerHTML = "Il tuo cognome &eacute; nella posizione:" + " " +  posizioneCognome;
