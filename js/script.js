$(document).ready(function(){ 
    $("ol#menu > li#submenu1").mouseover(function() {
        if($("nav#submenu").is(":visible")) {
            $("nav#submenu").css("display","none");
        }
        else {
            $("nav#submenu").css("display","block");
        }
    });
    $("ol#menu > li#search").click(function() {
        if($(".b-busqueda").is(":visible")) {
            $(".b-busqueda").css("display","none");
        }
        else {
            $(".b-busqueda").css("display","block");
        }
    });
});

var btn = document.getElementById('#menu');
var nav = document.getElementById('#nav-mobile')
var click = 0;
btn.onclick = function() {
    alert("hola");
    nav.style.display = "block";
    click++;
    if(click > 1) {
        nav.style.display = "none";
        click = 0;
    }

}

