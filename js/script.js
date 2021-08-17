const buttons = document.getElementsByClassName('button');
var current = 0;
function replace(id, value) {
    document.getElementById(id).value = value;
}
function replace2(id, value) {
    document.getElementById(id).innerText = value;
}
function getTopText() {
    return document.getElementById('top-text').innerText;
}
function calculate(prev, current) {
    const op = getTopText();
    let calc;
    if (op == '/') {
        calc = prev / current;
    }
    else if (op == '*') {
        calc = prev * current;
    }
    else if (op == '+') {
        calc = prev + current;
    }
    else if (op == '-') {
        calc = prev - current;
    }

    return calc;
}
for (const button of buttons) {
    button.addEventListener('click', function () {
        const clicked = button.innerText;
        if (clicked >= '0' && clicked <= '9') {
            current = 10 * current + parseInt(clicked);
            replace('input-field', current);
        }
        else {
            if (clicked == 'C') {
                prev = 0, current = 0;
                replace('input-field', '0');
                replace2('top-text', '')
            }
            else if (getTopText() != '') {
                const calc = calculate(prev, current);
                replace('input-field', calc);
                replace2('top-text', clicked);
                console.log(prev, current);
                prev = calc;
                current = 0;
            }
            else {
                replace2('top-text', clicked);
                prev = current;
                current = 0;
                replace('input-field', '0');
            }
        }
    })
}