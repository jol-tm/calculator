$(document).ready(function() {
    $('button').click(calc);
});

let input = '';

function calc() {
    if ($(this).attr('value') == 'c') {
        $('#display').val('');
        input = '';
    } else if ($(this).attr('value') == '=') {
        $('#display').val(eval($('#display').val().replace('X', 'x').replace('x', '*').replace('÷', '/')));
        input = '';
    } else {
        input += $(this).attr('value');
        $('#display').val(input);
    }

}