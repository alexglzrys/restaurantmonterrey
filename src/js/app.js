$(document).ready(function(){
    // Componente Barra de Navegación Mobile
    const menu_mobile = document.querySelector(".navigator");
    $(".menu__bars").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(menu_mobile).toggle("slow");
    })

    // Componente Slideshow
    $(".slides").superslides({
        play: 4000,
        slide_easing: 'easeInOutCubic',
        animation: 'fade',
        animation_speed: 1800,
        scrollable: true,
        pagination: false
    });

    // Componente Carousel (Sección de Promociones)
    $(".carousel").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    // Componente LightBox (Sección Galería)
    $("#ilightbox-01").iLightBox();
    $("#ilightbox-02").iLightBox();
    $("#ilightbox-03").iLightBox();
    $("#ilightbox-04").iLightBox();
    $("#ilightbox-05").iLightBox();
    $("#ilightbox-06").iLightBox();
    $("#ilightbox-07").iLightBox();
    $("#ilightbox-08").iLightBox();

    // Mecanismo de Animación de Navegación
    $(".navigator__link, .scrolltotop").click(function(event){
        event.preventDefault();
        event.stopPropagation();
        // Verificar el id de navegación interna
        const section = $(this).attr("href");
        $("html, body").stop().animate({
            'scrollTop': $(section).offset().top
        }, {
            'duration': 800,
            'easing': 'easeInOutExpo'
        });
        // Cerrar el bloque de navegación tras seleccionar un vinculo en el menu (modo mobile)
        if($(this).is(".navigator__link") && window.innerWidth < 768) {
            $(menu_mobile).toggle("slow");
        }
    });

    // Componente Menu Sticky
    const menu = document.querySelector(".menu");
    let top_menu = menu.offsetTop;
    window.addEventListener("scroll", function() {
        if(window.scrollY > top_menu) {
            menu.classList.add("sticky");
        } else {
            menu.classList.remove("sticky");
        }
    })
});

// Componente ScrollToTop
$(window).scroll(function(event){
    let top_position = $(this).scrollTop();
    const $scroll_top = $(".scrolltotop");
    if(top_position >= 250){
        $scroll_top.css({
            "visibility" = "visible",
            "opacity" = 1,
        });
    }else{
        $scroll_top.css({
            "visibility" = "hidden",
            "opacity" = 0,
        });
    }
});
