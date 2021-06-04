


// function myFunction(x) {
//       x.classList.toggle("change");
//     }
  
     
        
$(document).ready(function() {
  	// menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
			}
			else {
				$('.mainMenu').removeClass('act');
			}
	});

    //HEADER
    $('.banner-main').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
              }
            },
        ]
    });
    //INTRO
    $('.intro-slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true,
              }
            },
        ]
    });

    //NEWS  //NEWS DETAIL
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $(".button-prev"),
        nextArrow: $(".button-next"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                slidesToShow: 1,
                dots: false,
              }
            },
        ]
    });

    //PRODUCTS
    $('.slide-products').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        fade: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              
            }
          },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: true,
              }
            },
        ]
    });
    //ARGO
    $('.argo-slide').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          },
      ]
  });
    //COMMON DISEASES
    $('.common .common-slide').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            }
          },
      ]
    });


  //COMMON PCO DETAIL
    $(".slide-detail").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: $(".button-detail-prev"),
      nextArrow: $(".button-detail-next"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
    ]
  });

    


   
    //HEADER MAIN

    $(window).scroll(function(e) {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 40) {
            $(".header-main").addClass("sticky")
        } else {
            $(".header-main").removeClass("sticky")
        }
    });
    
    



    // //STICKY
    // $(window).scroll(function(e) {
    //     const scrollTop = $(this).scrollTop();
    //     if (scrollTop > 350) {
    //         $('.sticky-up').removeClass("hidden")
    //     } else {
    //         $('.sticky-up').addClass("hidden")
    //     }
    // });

    // $(".sticky-up").click(function(e) {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     })
    // })

    //AOS
    AOS.init({
      // once: true
    });

});




