const nav = document.getElementById("navigation");
const aELemente = nav.getElementsByTagName("a");

let istAuf = false;

function menuKlick() {


    if (istAuf) {
        nav.style.height = "54px";
    } else {
        nav.style.height = "280px";
    }
    istAuf = !istAuf;
}