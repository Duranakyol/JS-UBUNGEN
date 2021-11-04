//const collapse = document.querySelectorAll(".collapse");



function col(button) {
    //let inhalt = button.parentElement.getElementsByClassName("inhalt")[0];
    let inhalt = button.previousElementSibling;
//bu ikisi ayni ama jQuery icin bunu kullan!
//buttonun kendinden önceki kardeslerini al demek!

    //let icon = button.children[0];

    if (inhalt.style.maxHeight) {
        //wenn es nicht NULL (undefined) ist (siehe Inline Style)

        inhalt.style.maxHeight = null;

    } else {
        //wenn maxHeight NULL ist (keine Inline style oder maxHeight = null gesetzt)

        inhalt.style.maxHeight = inhalt.scrollHeight + "px";
    }


}



