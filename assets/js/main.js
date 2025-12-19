
$(function(){

    $(window).on('load', function () {
        $('.page-loader').delay('500').fadeOut(1000);
    });

    $(document).ready(function() {

        // Menu toggle functionality
        $(document).on('click', '.icon-menu', function(e) {
            e.preventDefault();
            $('.responsive-sidebar-menu').addClass('active');
        });
        
        $(document).on('click', '.responsive-sidebar-menu .overlay', function() {
            $('.responsive-sidebar-menu').removeClass('active');
        });

        $(document).on('click', '.menu li .scroll-to', function() {
            $('.responsive-sidebar-menu').removeClass('active');
        });

        // Color theme functionality
        $(document).on('click', ".color-boxed a", function(e) {
            e.preventDefault();
            $(".color-boxed a").removeClass("clr-active");
            $(this).addClass("clr-active");
        });
        
        // Settings toggle functionality
        $(document).on('click', ".global-color .setting-toggle", function(e) {
            e.preventDefault();
            $(".global-color").addClass("active");
        });

        $(document).on('click', ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings", function(e) {
            e.preventDefault();
            $(".global-color").removeClass("active");
        });

        // See More Skills functionality
        $(document).on('click', '#seeMoreSkills', function() {
            $('.hidden-skills').slideToggle();
            var isPlus = $(this).find('i').hasClass('la-plus');
            if (isPlus) {
                $(this).html('<i class="las la-minus"></i> Show Less Skills');
            } else {
                $(this).html('<i class="las la-plus"></i> See More Skills');
            }
        });

    });

    $(window).scroll(function() {
            
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.page-section').each(function(i) {
                if ($(this).position().top <= windscroll + 200) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {

            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

        if (windscroll >= 0) {
            $('.scroll-to-page').each(function(i) {

                var wscrolldecress = windscroll + 1;
                if ($(this).position().top <= wscrolldecress + 200) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {
            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

    }).scroll();







    if ($('.testimonial-slider').length) {
        var testimonial = $('.testimonial-slider').owlCarousel({
            items: 1,
            margin: 30,
            stagePadding: 0,
            smartSpeed: 450,
            autoHeight: true,
            loop: false,
            nav: false,
            dots: false,
            onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter //When the translation of the stage has finished.
        });

        $('.testimonial-nav .next').on('click', function() {
            testimonial.trigger('next.owl.carousel');
        })
        $('.testimonial-nav .prev').on('click', function() {
            testimonial.trigger('prev.owl.carousel', [300]);
        })


        function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
        
        // it loop is true then reset counter from 1
        if(item > items) {
                item = item - items
        }
        $('#testimonial-slide-count').html("<span class='left'>"+item+"</span> / "+items)
        }
    }

    // function remove_is_active() {
    //     $(".menu .scroll-to").removeClass("active");
    // }

    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // var container = document.querySelector("#smooth-content");

    // var height;
    // function setHeight() {
    //     height = container.clientHeight;


    //     document.body.style.height = height + "px";
    // }
    // ScrollTrigger.addEventListener("refreshInit", setHeight);

    // gsap.to(container, {
    //     y: () => -(height - document.documentElement.clientHeight),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: container,
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: 1,
    //         invalidateOnRefresh: true,
    //     }
    // });

    // Initialize scroll animations when DOM is ready
    $(document).ready(function() {
        setTimeout(scroll_animations, 100);
    });


    // Array.prototype.slice.call(document.querySelectorAll(".page-section")).forEach(function (e, t) {
    //     ScrollTrigger.create({
    //         trigger: e,
    //         id: t + 1,
    //         start: "top center",
    //         end: function () {
    //             return "+=".concat(e.clientHeight - 30);
    //         },
    //         toggleActions: "play reverse none reverse",
    //         toggleClass: { targets: e, className: "active" },
    //         onToggle: function () {
    //             $(".menu .scroll-to").removeClass("active"), "" != e.id && $('.menu .scroll-to[href*="#' + e.id + '"]').addClass("active");
    //         },
    //     });
    // });

    // Smooth scroll functionality
    document.querySelectorAll('.scroll-to').forEach((e) => {
        e.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            const targetEl = document.querySelector(target);
            
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});



function scroll_animations() {
    const elements = document.querySelectorAll('.scroll-animation');
    
    // Reset all elements to initial state
    elements.forEach(element => {
        const animation = element.dataset.animation || 'fade_from_bottom';
        
        // Remove any existing inline styles first
        element.removeAttribute('style');
        
        // Set initial animation state
        element.style.opacity = '0';
        element.style.transition = 'all 1.2s ease';
        
        switch(animation) {
            case 'fade_from_bottom':
                element.style.transform = 'translateY(50px)';
                break;
            case 'fade_from_top':
                element.style.transform = 'translateY(-50px)';
                break;
            case 'fade_from_left':
                element.style.transform = 'translateX(-50px)';
                break;
            case 'fade_from_right':
                element.style.transform = 'translateX(50px)';
                break;
            case 'rotate_up':
                element.style.transform = 'translateY(50px) rotate(5deg)';
                break;
        }
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translate(0, 0) rotate(0deg)';
                }, 100);
            } else {
                // Reset when out of view
                const element = entry.target;
                const animation = element.dataset.animation || 'fade_from_bottom';
                element.style.opacity = '0';
                
                switch(animation) {
                    case 'fade_from_bottom':
                        element.style.transform = 'translateY(50px)';
                        break;
                    case 'fade_from_top':
                        element.style.transform = 'translateY(-50px)';
                        break;
                    case 'fade_from_left':
                        element.style.transform = 'translateX(-50px)';
                        break;
                    case 'fade_from_right':
                        element.style.transform = 'translateX(50px)';
                        break;
                    case 'rotate_up':
                        element.style.transform = 'translateY(50px) rotate(5deg)';
                        break;
                }
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}