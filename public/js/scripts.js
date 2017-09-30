$(function() {

  function toggleNavigation() {
    $("#navbarNav").toggleClass('show');
  }

  function menuScroll(e) {
    const target = e.target.dataset.scrollto;
    $("html, body").delay(500).animate({
      scrollTop: $(target).offset().top
    }, {
      duration: 500,
      start: toggleNavigation()
    });
  }

  $(".navToggle").click(toggleNavigation);
  $(".nav-link-lg" ).click(menuScroll);

});
