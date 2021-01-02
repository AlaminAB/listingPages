$('.slider').cycle({
    fx: 'fade',
    speed: 600,
    timeout: 30000,
    pager: '#navi',
    cleartypeNoBg: true,
    slideResize: 0

  });

  $('.slider2').cycle({
    fx: 'fade',
    speed: 600,
    timeout: 1000000,
    pager: '#navi2',
    cleartypeNoBg: true,
    slideResize: 0,

    pagerAnchorBuilder: function (index) {
      return '<a href="#"> </a>';
    }

  });

  $(document).ready(function () {
    $(".fancybox").fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',

      helpers: {
        title: {
          type: 'inside'
        }
      }
    });
  });

  // FAQ slider 
  $('#faqs-slider').cycle({timeout:0,speed:500,startingSlide:0, fx:'fade', cleartypeNoBg:true});
$('#goto1').click(function(){$('#faqs-slider').cycle(0);return false; });
$('#goto2').click(function(){$('#faqs-slider').cycle(1);return false;});
$('#goto3').click(function(){$('#faqs-slider').cycle(2);return false;});

// $('#goto1').click(function(){$('#goto1').addClass("active" , "100"); $('#goto2').removeClass("active" , "0"); $('#goto3').removeClass("active" , "0");  });
// $('#goto2').click(function(){$('#goto2').addClass("active" , "100"); $('#goto1').removeClass("active" , "0"); $('#goto3').removeClass("active" , "0");  });
// $('#goto3').click(function(){$('#goto3').addClass("active" , "100"); $('#goto2').removeClass("active" , "0"); $('#goto1').removeClass("active" , "0");  });

let des= $(".faq-des");

function hidedes(){
    for(let a=0; a<des.length;a++){
       
        $(".faq-des").hide();
       }
}

$('.accordian-click').click(function(){
    hidedes()
$(this).next().show();


})


// nav 
let navLink= $(".nav-link");

function activeHides(){
    for(let a=0; a<navLink.length;a++){
       
        $(".nav-link").removeClass("active");
       }
}
$('.nav-link').click(function(){
    activeHides()
$(this).addClass("active");
$("#navbarNav").removeClass("show")
})



AOS.init();