$(document).ready(function () {
    $(function () {
        var $sections = $('.form-section');

        function navigateTo(index) {
            // Mark the current section with the class 'current'
            $sections
                .removeClass('current')
                .eq(index)
                .addClass('current');
            // Show only the navigation buttons that make sense for the current section:
            $('.previous').toggle(index > 0);
            var atTheEnd = index >= $sections.length - 1;
            $('.next').toggle(!atTheEnd);
            $('.ar-reservation-form [type=submit]').toggle(atTheEnd);
        }

        function curIndex() {
            // Return the current index by looking at which section has the class 'current'
            return $sections.index($sections.filter('.current'));
        }

        // Previous button is easy, just go back
        $('.previous').click(function () {
            navigateTo(curIndex() - 1);
        });

        // Next button goes forward iff current block validates
        $('.next').click(function () {
            if ($('.ar-reservation-form').parsley().validate({
                    group: 'block-' + curIndex()
                }))
                navigateTo(curIndex() + 1);
        });

        // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
        $sections.each(function (index, section) {
            $(section).find(':input').attr('data-parsley-group', 'block-' + index);
        });
        navigateTo(0); // Start at the beginning
    });
	
	var date_input = $('input[name="date"]'); //our date input has the name "date"
    var date_input2 = $('input[name="returndate"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
    date_input2.datepicker(options);
});
