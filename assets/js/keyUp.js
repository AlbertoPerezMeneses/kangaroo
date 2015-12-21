$(document).keyup(function (e) {

    var slides = {
        uri:
                [
                    "2.html", "3.html", "4.html", "5.html", "6.html",
                    "transporte.html", "venta.html", "corporativo.html",
                    "manufactura.html", "28.html", "29.html"
                ]

    }

    if (e.keyCode === 39 || e.keyCode === 38 || e.keyCode === 13) {
        console.log("siguiente");


        if (slides.uri.length > keyUp_i) {
            keyUp_i++                       
        }
        
         console.log(slides.uri[keyUp_i]);
         console.log(keyUp_i);
         window.location =slides.uri[keyUp_i];
    }
    if (e.keyCode === 40 || e.keyCode === 37) {
        console.log("regresar");
        
        if (keyUp_i > 0) {

            keyUp_i--;
        }
       console.log(slides.uri[keyUp_i]);
         console.log(keyUp_i);
         window.location =slides.uri[keyUp_i];
    }
    
   
});
var keyUp_i = 0;


function setUriPosition(pos) {

    keyUp_i = pos;
}