var liste = document.getElementById("liste");
var spanText = document.getElementById("hintergrundText");


function colorChange() {
    var auswahl = liste.value;
    document.body.style.backgroundColor = auswahl;

    var optionen = liste.options;
    var index = liste.selectedIndex;
    var innerText = optionen[index].innerHTML; // sayi da yazabilirdin!

    spanText.innerHTML = innerText;


}