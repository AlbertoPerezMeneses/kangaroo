$(document).keyup(function (e) {
    if (e.keyCode === 39 || e.keyCode === 38 || e.keyCode === 13) {
        console.log("siguiente");
    }
    if (e.keyCode === 40 || e.keyCode === 37) {
        console.log("regresar");
    }
    var slides = {
        uri:
                [
                    "2.html", "3.html", "4.html", "5.html", "6.html",
                    "transporte.html", "venta.html", "corporativo.html",
                    "manufactura.html", "28.html", "29.html"
                ]

    }
});