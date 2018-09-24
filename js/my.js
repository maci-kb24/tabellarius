
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {

        $(".navbar").addClass("scrolling");

        $('.dropdown-item').css('background-color', '#3c8dbc')

    } else {

        $(".navbar").removeClass("scrolling");
    
        $('.dropdown-item').css('background-color', 'transparent')
    }
});

$('.dropdown-item').hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
)

$('.dropdown-item').hover(function(){
    $(this).css('color', '#f4923e');
    }, function(){
    $(this).css('color', '#000');
});



let box = document.querySelectorAll('div[class^="trigger"]')

for( let i = 0; i < box.length; i++) {

    box[i].style.borderBottom = '3px solid lightgrey'
}

$('.trigger-one').click(function() {

    $('.message-one').css('display', 'block')
    $('.trigger-one').css('border-bottom', '3px solid #f4923e')

    $('.message-two').css('display', 'none')
    $('.trigger-two').css('border-bottom', '3px solid lightgrey')

    $('.message-three').css('display', 'none')
    $('.trigger-three').css('border-bottom', '3px solid lightgrey')

    $('.message-four').css('display', 'none')
    $('.trigger-four').css('border-bottom', '3px solid lightgrey')

    $('.message-five').css('display', 'none')
    $('.trigger-five').css('border-bottom', '3px solid lightgrey')

    $('.message-six').css('display', 'none')
    $('.trigger-six').css('border-bottom', '3px solid lightgrey')
})

$('.trigger-two').click(function() {

    $('.message-one').css('display', 'none')
    $('.trigger-one').css('border-bottom', '3px solid lightgrey')

    $('.message-two').css('display', 'block')
    $('.trigger-two').css('border-bottom', '3px solid #f4923e')

    $('.message-three').css('display', 'none')
    $('.trigger-three').css('border-bottom', '3px solid lightgrey')

    $('.message-four').css('display', 'none')
    $('.trigger-four').css('border-bottom', '3px solid lightgrey')

    $('.message-five').css('display', 'none')
    $('.trigger-five').css('border-bottom', '3px solid lightgrey')

    $('.message-six').css('display', 'none')
    $('.trigger-six').css('border-bottom', '3px solid lightgrey')
})

$('.trigger-three').click(function() {

    $('.message-one').css('display', 'none')
    $('.trigger-one').css('border-bottom', '3px solid lightgrey')

    $('.message-two').css('display', 'none')
    $('.trigger-two').css('border-bottom', '3px solid lightgrey')

    $('.message-three').css('display', 'block')
    $('.trigger-three').css('border-bottom', '3px solid #f4923e')

    $('.message-four').css('display', 'none')
    $('.trigger-four').css('border-bottom', '3px solid lightgrey')

    $('.message-five').css('display', 'none')
    $('.trigger-five').css('border-bottom', '3px solid lightgrey')

    $('.message-six').css('display', 'none')
    $('.trigger-six').css('border-bottom', '3px solid lightgrey')
})

$('.trigger-four').click(function() {

    $('.message-one').css('display', 'none')
    $('.trigger-one').css('border-bottom', '3px solid lightgrey')

    $('.message-two').css('display', 'none')
    $('.trigger-two').css('border-bottom', '3px solid lightgrey')

    $('.message-three').css('display', 'none')
    $('.trigger-three').css('border-bottom', '3px solid lightgrey')

    $('.message-four').css('display', 'block')
    $('.trigger-four').css('border-bottom', '3px solid #f4923e')

    $('.message-five').css('display', 'none')
    $('.trigger-five').css('border-bottom', '3px solid lightgrey')

    $('.message-six').css('display', 'none')
    $('.trigger-six').css('border-bottom', '3px solid lightgrey')
})

$('.trigger-five').click(function() {

    $('.message-one').css('display', 'none')
    $('.trigger-one').css('border-bottom', '3px solid lightgrey')

    $('.message-two').css('display', 'none')
    $('.trigger-two').css('border-bottom', '3px solid lightgrey')

    $('.message-three').css('display', 'none')
    $('.trigger-three').css('border-bottom', '3px solid lightgrey')

    $('.message-four').css('display', 'none')
    $('.trigger-four').css('border-bottom', '3px solid lightgrey')
    
    $('.message-five').css('display', 'block')
    $('.trigger-five').css('border-bottom', '3px solid #f4923e')

    $('.message-six').css('display', 'none')
    $('.trigger-six').css('border-bottom', '3px solid lightgrey')
})

$('.trigger-six').click(function() {

    $('.message-one').css('display', 'none')
    $('.trigger-one').css('border-bottom', '3px solid lightgrey')

    $('.message-two').css('display', 'none')
    $('.trigger-two').css('border-bottom', '3px solid lightgrey')

    $('.message-three').css('display', 'none')
    $('.trigger-three').css('border-bottom', '3px solid lightgrey')

    $('.message-four').css('display', 'none')
    $('.trigger-four').css('border-bottom', '3px solid lightgrey')

    $('.message-five').css('display', 'none')
    $('.trigger-five').css('border-bottom', '3px solid lightgrey')

    $('.message-six').css('display', 'block')
    $('.trigger-six').css('border-bottom', '3px solid #f4923e')
})

$(document).ready(function() {

$('.collapsed').click(function() {

        let test = $(this).children()

        $(test).toggleClass('fa-plus fa-minus')

        console.log($(this))
    })
})

AOS.init();

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')  && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
        });
      }
    }
  });

