var anzeigenContainer = document.getElementById("anzeigenContainer");

function autoAdd(obj) {

    let anzeige = document.createElement("div");
    let img = document.createElement("img");
    let data = document.createElement("div");
    let titel = document.createElement("span");
    let unTitel = document.createElement("span");
    let merkmale = document.createElement("div");
    let merkmaleDiv1 = document.createElement("div");
    let merkmaleDiv2 = document.createElement("div");
    let stoffSpan = document.createElement("span");
    let leistungS = document.createElement("span");
    let kilometer = document.createElement("span");
    let baujahr = document.createElement("span");

    anzeige.appendChild(img);
    anzeige.appendChild(data);
    data.appendChild(titel);
    data.appendChild(unTitel);
    data.appendChild(merkmale);
    merkmale.appendChild(merkmaleDiv1);
    merkmale.appendChild(merkmaleDiv2);
    merkmaleDiv1.appendChild(stoffSpan)
    merkmaleDiv1.appendChild(leistungS);
    merkmaleDiv2.appendChild(kilometer);
    merkmaleDiv2.appendChild(baujahr);

    anzeige.classList.add("anzeige");
    data.classList.add("data");
    titel.classList.add("titel");
    unTitel.classList.add("untertitel");
    merkmale.classList.add("merkmale");

    img.src = obj.bildQuelle;
    titel.innerHTML = obj.titel;
    unTitel.innerHTML = obj.untertitel;
    stoffSpan.innerHTML = obj.kraftstoff;
    leistungS.innerHTML = obj.motorleistung;
    kilometer.innerHTML = obj.kilometer;
    baujahr.innerHTML = obj.baujahr;

    anzeigenContainer.appendChild(anzeige);
}

function klick() {
    let inputArray = document.getElementById("inputs").getElementsByTagName("input");
    let auto = {
        bildQuelle: inputArray[0].value,
        titel: inputArray[1].value,
        untertitel: inputArray[2].value,
        kraftstoff: inputArray[3].value,
        motorleistung: inputArray[4].value,
        kilometer: inputArray[5].value,
        baujahr: inputArray[6].value,
    }

    if (parseInt(auto.baujahr) < 1990) {
        alert("DAS AUTO IST ZU ALT ZU VERKAUFEN");
    } else {
        autoAdd(auto);
    }

}