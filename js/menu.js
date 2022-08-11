jQuery(function ($) {
    $(".c-button").on("click", function () {
        $(this).toggleClass("is-open");
        $("#shadow").toggleClass("go");
        $(".l-nav").toggleClass("is-open");
    });
});