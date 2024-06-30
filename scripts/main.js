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
    let btnval =  $(this).attr('value');
    input = $('#display').val();

    if (btnval == '=' || k.code == 'Enter' && input != '') {
        input = eval(input.toLowerCase().replaceAll('x', '*').replaceAll('÷', '/').replaceAll('^', '**').replaceAll(',', '.'));
        $('#display').css('boxShadow', '0 0 2rem rgb(0, 190, 255)');
    } else if (btnval == 'c') {
        input = '';
        $('#display').css('boxShadow', 'none');
    } else {
        input += btnval;
        $('#display').css('boxShadow', 'none');

        if (btnval == '(') {
            $(this).attr('value', ')');
        } else if (btnval == ')') {
            $(this).attr('value', '(');
        }
    } 
    $('#display').val(input);
}