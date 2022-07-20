$(document).ready(function () {

    $('.parallax').parallax();

    $("#p1, #p2").keyup(validate);

    $("#money").draggable();

    $('#summ').click(function () {
        $('#money').css('display', 'block');
    })

    $('#money').click(function () {
        $('#money').css('display', 'none');
    })

    $('.navbar').on("click", "a", function (event) {
        event.preventDefault();
        var csrll = $(this).attr('href'),
            top = $(csrll).offset().top;
        $('body,html').animate({ scrollTop: top }, 2000)
    })

    $('.up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 2000)
    })

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll>2000) {
            $("#fry").animate({left: "+=30%" }, 3000);
            $("#fry").animate({left: "-=30%" }, 5000);
                
        }
    })

    $(window).scroll(function () {
        var csr = $(this).scrollTop();
        if (csr > 1200) {
            $('.up').fadeIn();
        }
        else {
            $('.up').fadeOut();
        }
    })
});

function validate() {
    var pass1 = $("#p1").val();
    var pass2 = $("#p2").val();

    if (pass1 == pass2) {
        $("#p1, #p2").css('background', 'green');
    } else if (pass2 === "") {
        $("#p1, #p2").css('background', 'green');
    } else { $("#p1, #p2").css('background', 'red'); }
}
