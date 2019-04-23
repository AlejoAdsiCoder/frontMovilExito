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
