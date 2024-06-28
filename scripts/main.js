$(document).ready(function() {
    $('button').on('click', calc);
    $('#display').on('keypress', function(k) {
        if (k.code == 'Enter'){
            calc(k);
        }
    });
    $('#display').on('input', function() {
        $('#display').css('boxShadow', 'none');
    });
});

let input = '';

function calc(k) {
    input = $('#display').val();
    if ($(this).attr('value') == '=' || k.code == 'Enter' && input != '') {
        input = eval(input.toLowerCase().replace('x', '*').replace('÷', '/').replace('^', '**').replace(',', '.'));
        $('#display').css('boxShadow', '0 0 2rem rgb(0, 190, 255)');
    } else if ($(this).attr('value') == 'c') {
        input = '';
        $('#display').css('boxShadow', 'none');
    } else {
        input += $(this).attr('value');
        $('#display').css('boxShadow', 'none');
    } 
    $('#display').val(input);
}