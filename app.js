$(function(){

    $cell = $('tbody').children('tr:first').siblings().children()
    console.log( $cell );

    $cell.each(function(index, element) {
        $(element).on('click', function() {
            let text = $('<div class="js"></div>');
            text.insertAfter('table');
        });
    });









});