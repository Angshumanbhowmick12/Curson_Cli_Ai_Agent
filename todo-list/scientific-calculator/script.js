document.addEventListener('DOMContentLoaded', function() {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn-block');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                resultInput.value = '';
            } else if (buttonText === '=') {
                try {
                    resultInput.value = eval(resultInput.value);
                } catch (error) {
                    resultInput.value = 'Error';
                }
            } else if (buttonText === 'PI'){
                 resultInput.value += Math.PI
            }
             else if (buttonText === 'sin'){
                 resultInput.value = Math.sin(resultInput.value);
            }
             else if (buttonText === 'cos'){
                 resultInput.value = Math.cos(resultInput.value);
            }
             else if (buttonText === 'tan'){
                 resultInput.value = Math.tan(resultInput.value);
            }
            else if (buttonText === 'log'){
                 resultInput.value = Math.log10(resultInput.value);
            }
            else if (buttonText === 'sqrt'){
                 resultInput.value = Math.sqrt(resultInput.value);
            }
            else if (buttonText === 'x!'){
                let number = parseInt(resultInput.value)
                let fact = 1;
                for (let i = 1; i <= number; i++) {
                    fact *= i;
                }
                resultInput.value = fact

            }

            else if (buttonText === 'pow'){
                 resultInput.value = Math.pow(resultInput.value,2);
            }
            
            else {
                resultInput.value += buttonText;
            }
        });
    });
});