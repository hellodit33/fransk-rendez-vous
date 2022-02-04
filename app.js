// Jquery function to make the navbar get white and fixed when scrolling down - especially useful on the material pages
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 54) {
            $("nav").css("background", "white");
            $("nav").css("position", "fixed");
        }

        else {
            $("nav").css("background", "none");
            $("nav").css("position", "relative");
            $("nav").css("margin", "0");
            $("nav").css("padding", "0");
            $("nav").css("top", "0");
            $("nav").css("width", "100%");

        }
    })
})

// Word animation

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1))
});

// Jquery function taking the reader to the choosen page: a wordlist or a text


$('#material').on('change', function (e) {
    document.location.href = "material/" + $(this).val() + ".html";
});