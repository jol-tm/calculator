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
        input = '';
    } else if ($(this).attr('value') == '=' || k.code == 'Enter') {
        input = $('#display').val();
        input = eval(input.toLowerCase().replace('x', '*').replace('÷', '/').replace(',', '.'));
        $('#display').focus();
    } else {
        input += $(this).attr('value');
    } 
    $('#display').val(input);
}