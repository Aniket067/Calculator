let string = "";
let buttons = document.querySelectorAll("button");
memory = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    throw new Error('Invalid operation');
                }
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = 'Invalid operation';
                console.error('Error:', error.message);
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'M+') {
            let currentValue = parseFloat(document.querySelector('input').value);
            memory += currentValue;
            console.log("Memory value:", memory);
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
