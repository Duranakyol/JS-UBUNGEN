const bilder = document.querySelectorAll("#bilder>img");
const kreuz = document.querySelector("#lightbox i");
const lightbox = document.getElementById("lightbox");

bilder.forEach(function(element) {
    element.onclick = function() {
        lightbox.style.display = "flex";

        let quelle = element.getAttribute("src");
        const lightImg = document.querySelector("#lightbox img");

        lightImg.setAttribute("src", quelle);
        setTimeout(function() {
            lightImg.style.transform = "scale(1)";
        }, 700);
    }
});

kreuz.onclick = function() {
    lightbox.style.display = "none";
    setTimeout(function() {
        lightImg.style.transform = "scale(0)";
    }, 700);
}