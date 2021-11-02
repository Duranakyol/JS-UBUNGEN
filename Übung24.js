var letzte = null;
var such = document.getElementById('suchleiste');
var istAktiv = false;

function aktivieren(el) {

    if (el.classList.contains("aktiv") == false) {
        el.classList.add("aktiv");
        if (letzte != null) {
            letzte.classList.remove("aktiv");
        } else {}

        letzte = el;
    }

    if (el.classList.contains("suchen") == true) {
        if (istAktiv == false) {
            such.style.opacity = "1";
            istAktiv = true;
        } else {
            such.style.opacity = "0";
            istAktiv = false;
        }
    }
}