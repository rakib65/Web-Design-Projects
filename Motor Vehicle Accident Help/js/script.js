$(document).ready(function () {
    $('.ar-form fieldset:first-child').fadeIn('slow');
    $('.error-msg').hide();
    $('.error-msg2').hide();
    $('.error-msg3').hide();
    $('.attorny').hide();
    $('.otherOptions').hide();

    /* $('.ar-form input[type="text"]').on('focus', function () {
         $(this).removeClass('input-error');
     });*/

    $('.option1').on('focus', function () {
        $('.otherOptions').hide();
    });
    $('.option2').on('focus', function () {
        $('.otherOptions').hide();
    });
    $('.option3').on('focus', function () {
        $('.otherOptions').hide();
    });
    $('.option4').on('focus', function () {
        $('.otherOptions').hide();
    });
    $('.others').on('focus', function () {
        $('.otherOptions').show();
    });


    $('.optionN').on('focus', function () {
        $('.attorny').hide();
    });
    $('.optionY').on('focus', function () {
        $('.attorny').show();
    });


    $('.btn-next').on('click', function () {
        var next_step1 = true;
        var next_step2 = false;

        var radio1 = $('input[name=nameInjured]').val();
        var radio2 = $('input[name=cause]:checked').val();
        var radio3 = $('input[name=missWork]:checked').val();
        var radio4 = $('input[name=lawyer]:checked').val();
        var select1 = $('select[name="year"]').val();


        if (!radio1 || !radio2 || !radio3 || !radio4 || !select1) {
            next_step2 = false;
            $('.error-msg').show();
        } else {
            next_step2 = true;
            $('.error-msg').hide();
        }

        if (next_step1 == true && next_step2 == true) {
            $('.ar-form fieldset:first-child').fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    }); // end of button click(next)

    // submit
    $('.ar-form').on('submit', function (e) {

        $(this).find('input[type="email"], input[type="tel"],input[type="number"]').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                //$(this).addClass('input-error');
                $('.error-msg2').show();
            } else {
                /*if ($('input[name="confirmPhone"]').val() != $('input[name="phone"]').val()) {
                    e.preventDefault();
                    $('.error-msg3').show();
                } else {
                    $('.error-msg2').hide();
                    $('.error-msg3').show();
                }*/
                //$(this).removeClass('input-error');
                $('.error-msg2').hide();
            }
        });
    }); // end of form submit
}); // end of document()
