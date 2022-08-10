jQuery(function ($) {
    $(".c-button").on("click", function () {
        $(this).toggleClass("is-open");
        $(".l-nav").toggleClass("is-open");
    });
});