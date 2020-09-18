
    $('.customerSlider').slick({
        infinite: false,
        dots:true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     arrows: false,
          //     centerMode: true,
          //     centerPadding: '40px',
          //     slidesToShow: 1
          //   }
          // }
        ]
      });
