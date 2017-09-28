$(document).ready(function() {
	//anchor
    $("a.ancLinks").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 2000 );
      return false;
    });

    // title animation

    setTimeout(function(){
      var item = document.getElementById('slider-first');
      window.removeEventListener('resize', false);
      item.remove();
    },7000)

    
  });