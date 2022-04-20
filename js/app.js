/* Header scroll */

const intro = $('#intro')
const introH = intro.innerHeight()
const header = $('#header')
$(window).on('scroll', function() {
    const scrollTop = $(this).scrollTop()
    
    if(scrollTop >= introH) {
        header.addClass("header--dark")
    } else {
        header.removeClass("header--dark")
    }
})

/* Smooth scroll to sections */

$('[data-scroll]').on('click', function(event) {
    event.preventDefault()
    const scrollEl = $(this).data('scroll')
    const scrollElPos = $(scrollEl).offset().top

    $('html, body').animate({
        scrollTop: scrollElPos - 100
    }, 500)
})