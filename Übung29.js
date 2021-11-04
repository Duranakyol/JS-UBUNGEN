var input = document.getElementById("link");
var aside = document.getElementById("aside");
var container = document.getElementById("container");
var span = document.getElementById("mySpan");

function add() {

    var img = document.createElement("img");
    img.src = input.value;
    img.onclick = function() {
        imgClick(img.src);
    }

    aside.appendChild(img);
}

function imgClick(quelle) {
    span.style.display = "block";

    setTimeout(
        function() {
            container.style.backgroundImage = "url(" + quelle + ")";
            span.style.display = "none";
        }, 1500
    );

}