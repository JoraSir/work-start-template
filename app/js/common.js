$(document).ready(function(){

    $(window).load(function() {
        $(".loader").delay(200).fadeOut("slow");
    });

    svg4everybody({});

    $(".menu-button").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("is-active");
        $(".nav-menu").slideToggle();
    });
});
