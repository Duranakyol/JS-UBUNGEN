var inputBeschreibung = document.getElementById("beschreibungInput");
var inputBetrag = document.getElementById("betragInput");
var liste = document.getElementById("liste");

function add() {
    if (inputCheck() == false) {
        return;
    }

    transaktionAdd();

}


function inputCheck() {

    if (inputBeschreibung.value == "") {
        alert("Beschreibung bitte eingeben!");
        return false;
    } else if (inputBetrag.value == "") {
        alert("Betrag bitte eintragen!");
        return false;
    } else if (/^[-+]?[0-9]+$/.test(inputBetrag.value) == false) {
        //wenn es etwas anderes als zahlen gibt//
        alert("Betrag ungültig!");
        return false;
    }
    return true;
}

function transaktionAdd() {
    var divContainer = document.createElement("div");
    var spanFirst = document.createElement("span");
    var divBeschreibung = document.createElement("div");
    var spanLast = document.createElement("span");

    spanFirst.innerHTML = "+";
    spanLast.innerHTML = mitPunkt(inputBetrag.value) + " € ";
    divBeschreibung.innerHTML = inputBeschreibung.value;

    var betragZahl = parseInt(inputBetrag.value);

    if (betragZahl < 0) {
        spanFirst.innerHTML = " - ";
        spanFirst.style.backgroundColor = "var(--minus)";
        spanLast.style.backgroundColor = "var(--minus)";
    }
    divContainer.appendChild(spanFirst);
    divContainer.appendChild(divBeschreibung);
    divContainer.appendChild(spanLast);

    liste.appendChild(divContainer);
}

function mitPunkt(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //sayilar arasina otomatik virgül atar!