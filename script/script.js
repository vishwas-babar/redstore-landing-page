function myFunction() {
    var x = document.getElementById("navigation-bar-container");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
