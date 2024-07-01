$(document).ready(function() {
    // Handle btn click or enter press to calculate
    $('#display').on('keypress', function(k) {calc(k)});
    $('button').on('click', calc);
    // Handle the btn press effect 
    $('button').on('mousedown', function(e){
        $(this).css({'boxShadow': 'var(--neuro-sdw-press)', 'scale': .9});
    });
    $('button').on('mouseup mouseout', function(e){
        curTheme == 'light' ? $(this).css('boxShadow', 'var(--neuro-sdw)') : $(this).css('boxShadow', 'var(--neuro-sdw-dk)');
        $(this).css('scale', 1)
    });
    // Change the theme
    $('#themeBtn').on('click', changeTheme);
    // Restore last theme when reloaded
    restoreTheme();
});

// The btn press effect is handled by script because JS can't change pseudoelements CSS, so it's necessary to change the variable as the theme, as occurs in changeTheme() function
let pressSdw = '-5px -5px 5px rgba(255, 255, 255, .5), 5px 5px 10px rgba(0, 0, 0, .5), inset -5px -5px 5px rgba(255, 255, 255, .5), inset 5px 5px 10px rgba(0, 0, 0, .5)';
let pressSdwDk = '-5px -5px 5px rgba(255, 255, 255, .05), 5px 5px 10px rgba(0, 0, 0, 1), inset -5px -5px 5px rgba(255, 255, 255, .05), inset 5px 5px 10px rgba(0, 0, 0, 1)';
// Search for last theme, default is dark
let curTheme = localStorage.getItem('theme') || 'dark';
// Clears the input before calculate to avoid errors
let input = '';

function calc(k) {
    let btnval =  $(this).attr('value');
    input = $('#display').val();

    if (btnval == '=' || k.code == 'Enter' && input != '') {
        // Calculates the content of input, replacing some symbols to calculate properly
        input = eval(input.toLowerCase().replaceAll('x', '*').replaceAll('÷', '/').replaceAll('^', '**').replaceAll(',', '.'));
    } else if (btnval == 'c') {
        // Simply clears the input
        input = '';
    } else if (btnval != null){
        // Adds the btn value to the variable to calculate
        input += btnval;
        // Change the parentheses from open to close and vice versa when clicked
        if (btnval == '(') {
            $(this).attr('value', ')');
        } else if (btnval == ')') {
            $(this).attr('value', '(');
        }
    } 
    // Displays the content from input to be calculated to the user
    $('#display').val(input);
}

function changeTheme() {
    if (curTheme == 'dark') {
        $('body').css({'background': 'var(--bck)', 'color': 'black'});
        $('button').css('boxShadow', 'var(--neuro-sdw)');
        // Here the change occurs
        document.querySelector(':root').style.setProperty('--neuro-sdw-press', pressSdw);
        $('input').css('boxShadow', 'var(--neuro-sdw)');
        $('#iconDark').css('scale', '1');
        $('#iconLight').css('scale', '0');
        // Stores in the variable and in the browser the actual theme to restore it in restoreTheme()
        curTheme = 'light';
        localStorage.setItem('theme', curTheme);
    } else {
        $('body').css({'background': 'var(--bck-dk)', 'color': 'white'});
        $('button').css('boxShadow', 'var(--neuro-sdw-dk)');
        // Here the change occurs
        document.querySelector(':root').style.setProperty('--neuro-sdw-press', pressSdwDk);
        $('input').css('boxShadow', 'var(--neuro-sdw-dk)');
        $('#iconDark').css('scale', '0');
        $('#iconLight').css('scale', '1');
        // Stores in the variable and in the browser the actual theme to restore it in restoreTheme()
        curTheme = 'dark';
        localStorage.setItem('theme', curTheme);
    }
}

function restoreTheme() {
    // Restores last theme
    if (curTheme == 'dark') {
        $('body').css({'background': 'var(--bck-dk)', 'color': 'white'});
        $('button').css('boxShadow', 'var(--neuro-sdw-dk)');
        document.querySelector(':root').style.setProperty('--neuro-sdw-press', pressSdwDk);
        $('input').css('boxShadow', 'var(--neuro-sdw-dk)');
        $('#iconDark').css('scale', '0');
        $('#iconLight').css('scale', '1');
    } else {
        $('body').css({'background': 'var(--bck)', 'color': 'black'});
        $('button').css('boxShadow', 'var(--neuro-sdw)');
        document.querySelector(':root').style.setProperty('--neuro-sdw-press', pressSdw);
        $('input').css('boxShadow', 'var(--neuro-sdw)');
        $('#iconDark').css('scale', '1');
        $('#iconLight').css('scale', '0');
    }
}