var liste = document.getElementById("liste");
var popup = document.getElementById("popup");
var popupFenster = document.getElementById("popupFenster");

var namen = ["Iphone 12", "Galaxy S8", "Xiaomi Mi 10", "Huawei P40", "Oppo A72", "Nokia"];
var preise = [1100, 400, 900, 600, 300, 100];

for (var i = 0; i < namen.length; i++) {

    var el = document.createElement("div");
    el.classList.add("produkt");

    addonclick(el, i);

    var h4 = document.createElement("h4");
    h4.innerHTML = namen[i];

    var span = document.createElement("span");
    span.innerHTML = "Preis: " + preise[i] + " €";

    el.appendChild(h4);
    el.appendChild(span);
    liste.appendChild(el);
}

function addonclick(element, index) {
    element.onclick = function() {
        klick(namen[index], preise[index]);
    }
}

function klick(produktName, produktPreis) {
    popup.style.display = "flex";

    var popupH4 = document.getElementById("popupH4");
    popupH4.innerHTML = produktName;

    var popupSpan = document.getElementById("popupSpan");
    popupSpan.innerHTML = "Preis : " + produktPreis + " €";
}

function inDenWarenkorb() {
    popup.style.display = "none";
}