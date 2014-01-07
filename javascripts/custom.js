jQuery(function() {
  // Pretty Date
  return $.each($("[data-time]"), function(index, ele) {
    return $(ele).html(prettyDate(new Date($(this).data("time"))));
  });
});

;(function ($) {
  // Simple and efective Responsive Menu
  $("#nav").before('<div id="menu"><b>Menu</b> <span>&#9776</span> </div>');
    $("#menu").on('click', function () {
        $("#nav").slideToggle().on('click', function(){
            $(this).slideUp();
        });
    });
    $(window).resize(function () {
        if (window.innerWidth > 768) {
            $("#nav").removeAttr("style");
        }
    });
})(jQuery);
