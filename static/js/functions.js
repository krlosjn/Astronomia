function display_result() {
    document.getElementById("text_change").innerHTML = "look up to the stars!"
}


/*función que me permite mostrar la hora en la página  */
function display_date() {
    document.getElementById("time").innerHTML = Date();
}
/*end date  */

/* función para apagar y encender bombillo */
function light(bombillo) {
    var save;
    if (bombillo == 0) {
        save = "static/img/pic_bulboff.gif"
    } else {
        save = "static/img/pic_bulbon.gif"
    }

    document.getElementById("bombillo").src = save;

}
/* fin de función */