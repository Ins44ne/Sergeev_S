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

    // slide/show/hide/fade
    $('#flag').click(function(){
        $('.blue').slideUp('fast');
        $('.yellow').slideUp('slow');
    })

    $('#flag1').click(function(){
        $('.blue').slideDown('slow');
        $('.yellow').slideDown('slow');
    })

    $('#flag2').click(function(){
        $('.white1').hide(1800);
        $('.black').hide(1200);
        $('.white').hide(600);
    })

    $('#flag3').click(function(){
        $('.white').show(900);
        $('.black').show(1800);
        $('.white1').show(2700);
    })

    $('#flag4').click(function(){
        $('.blue1').fadeOut(1800);
        $('.black1').fadeOut(1200);
        $('.white2').fadeOut(600);
    })

    $('#flag5').click(function(){
        $('.blue1').fadeIn(900);
        $('.black1').fadeIn(1800);
        $('.white2').fadeIn(2700);
    })

    $('.black').mouseenter(function(){
        alert('На красный не поменяю! :-)');
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
