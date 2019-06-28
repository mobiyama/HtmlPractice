$(function() {
    $("#monster").mouseout(function() {
        $("#mimg").fadeIn(3000);

    });
    $("#mimg").mouseover(function() {
        $("#text").html('高麗人参パワー').css("color", "white");
    });
});