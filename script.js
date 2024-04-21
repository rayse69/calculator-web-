document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', 'AC'
    ];

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button;
        btn.addEventListener('click', () => {
            if (button === 'C') {
                display.value = display.value.slice(0, -1);
            } else if (button === 'AC') {
                display.value = '';
            } else if (button === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += button;
            }
        });
        document.querySelector('.buttons').appendChild(btn);
    });
});
