$(document).ready(function(){
  // Smooth scroll for navigation
  $("nav ul li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 800);
    }
  });
});
