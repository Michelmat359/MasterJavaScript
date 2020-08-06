$(document).ready(function () {

    // Selector ID

    var rojo = $('#rojo');
    rojo.css("background", "red").css("color", "white");

    var amarillo = $('#amarillo').css("background", "yellow").css("color", "green");

    $('#verde').css("background", "green").css("color", "yellow");


    //Selector de clases

    var mi_clase = $('.zebra')
    console.log(mi_clase.eq(0));
    console.log(mi_clase.eq(1));

    mi_clase = $('.zebra').css("padding", "5px");
    $('.sin_borde').click(function () {
        $(this).addClass("zebra")
    })

    // Selectores de etiquetas

    var parrafos = $('p');
    parrafos.css("cursor", "pointer");
    parrafos.click(function () {
        var that = $(this);
        if (that.hasClass('grande')) {
            that.removeClass('grande');
        } else {
            that.addClass('grande');
        }
    })

    // Selectores por atributo

    $('[title="Google"]').css("background", "#ccc")
    $('[title="Facebook"]').css("background", "blue")

    // Otros

    //$('p, a').addClass("margen_superior");
    var busqueda = $("#caja").find('.resaltado');
    var busqueda2 = $('#caja .resaltado');
    var busqueda3 = $("#caja").find('[title="Google"]');
    var busqueda4 = $("#caja").eq(0).parent().parent().parent().find('[title="Google"]');

    console.log(busqueda);
    console.log(busqueda2);
    console.log(busqueda3);
    console.log(busqueda4);

    


})