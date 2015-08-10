$(document).ready(function () {
    function toggleAnimation (selector, cssMovement, initial, newOne) {
        var toggleMovement = selector.css(cssMovement) === newOne ? initial : newOne;
        selector.css(cssMovement, toggleMovement);
    }

    $('.app-name').hide();

    $('li.expand a').on('click', function () {
        var $this = $(this),
            $navbarBrand = $('a.navbar-brand'),
            $appName = $('.app-name'),
            $expandLinkI = $('li.expand a i'),
            $sidebar = $('#sidebar'),
            $hiddenTitle = $('.hidden-title'),
            $listItem = $('.list-item');

        toggleAnimation($navbarBrand, 'width', '70px', '200px');
        toggleAnimation($this, 'margin-left', '0', '130px');
        toggleAnimation($sidebar, 'width', '70px', '200px');

        if ($expandLinkI.hasClass('fa-navicon')) {
            $expandLinkI.removeClass('fa-navicon')
                 .addClass('fa-remove');
        }
        else {
            $expandLinkI.removeClass('fa-remove')
                 .addClass('fa-navicon');
        }

        if ($appName.css('display') === 'none') {
            $appName.fadeIn();
        }
        else {
            $appName.fadeOut(50);
        }

        if ($hiddenTitle.hasClass('hidden')) {
            $hiddenTitle.fadeIn();
            $hiddenTitle.removeClass('hidden');
        }
        else {
            $hiddenTitle.addClass('hidden');
        }

        if ($listItem.hasClass('not-expanded')) {
            $listItem.removeClass('not-expanded');
            $listItem.addClass('expanded');
        }
        else {
            $listItem.addClass('not-expanded');
            $listItem.removeClass('expanded');
        }
    });
});