$(document).ready(function () {
    console.log('ssss');
    $('div.play-pause a').on('click', function () {
    console.log('hsss');
        var $thisChildren = $(this).children(),
            $playIcon = $($thisChildren[0]),
            $pauseIcon = $($thisChildren[1]);

        if ($playIcon.hasClass('hidden')) {
            $pauseIcon.addClass('hidden');
            $playIcon.removeClass('hidden');
        }
        else {
            $playIcon.addClass('hidden');
            $pauseIcon.removeClass('hidden');
        }
    });
});