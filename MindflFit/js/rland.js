$(document).ready(function () {
    $('div[data-type="parallax_section"]').each(function () {
        var $bgobj = $(this); // Variable para asignacion de objeto
        $(window).scroll(function () {
            $window = $(window);
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });

});
