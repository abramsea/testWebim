menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === "header-links") {
        x.className += " responsive" ;
    } else {
        x.className = "header-links";
    }

}
