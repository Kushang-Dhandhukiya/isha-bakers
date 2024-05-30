$(document).ready(function(){

  setTimeout(function(){
      $('.preloader').fadeOut();
  },3000);

  AOS.init();

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    });

    function visible(partial) {
        var $t = partial,
            $w = jQuery(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
    
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
    
    }
    
    $(window).scroll(function(){
    
      if(visible($('.count-digit')))
        {
          if($('.count-digit').hasClass('counter-loaded')) return;
          $('.count-digit').addClass('counter-loaded');
          
      $('.count-digit').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 3000,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });
        }
    })
    
    $('#about_testi').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:1,
        animateOut:true,
        animatein:true,
        // autoplay:true,
    })

    $('#about_testi2').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      items:1,
      animateOut:true,
      animatein:true,
      // autoplay:true,
  })

  $('#gallery_view').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      items:4,
      animateOut:true,
      animatein:true,
      autoplay:true,
      autoplaySpeed:750,
  })

  $('#team_testi').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    items:4,
    animateOut:true,
    animatein:true,
    // autoplay:true,
})

  $('#client_testi').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    nav:true,
    // autoplay:true,
    // autoplayTimeout:3000,
    smartSpeed:800,
  })
  
});    

$('#latest_post').owlCarousel({
  loop:true,
  margin:30,
  // nav:true,
  dots:true,
})


$('#creamy_cake').owlCarousel({
  loop:true,
  margin:30,
  // nav:true,
  dots:true,
})

$('#brand').owlCarousel({
  loop:true,
  margin:30,
  items:5,
  dots:false,
})


var btn = $('.to_top');
btn.hide(); 
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.fadeIn();
    } else {
        btn.fadeOut();
    }
});

btn.on('click', function(e) {
e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

$('.main_menu li > a').click(function(){
  $('.main_menu li a').removeClass('active');
  $(this).addClass('active')
});