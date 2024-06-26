$(document).ready(function() {
    $('button').on('click', calc);
    $('#display').on('keypress', function(k) {
        if (k.code == 'Enter'){
            calc(k);
        }
    });
});

let input = '';

function calc(k) {
    if ($(this).attr('value') == 'c') {
        $('#display').val('');
        input = '';
    } else if ($(this).attr('value') == '=' || k.code == 'Enter') {
        $('#display').val(eval($('#display').val().replace('X', 'x').replace('x', '*').replace('÷', '/').replace(',', '.')));
        input = '';
    } else {
        input += $(this).attr('value');
        $('#display').val(input);
    }

}