// console.log('loded');

const display = document.getElementById('display');

function CalcDisplay(input) {
    display.value += input;
}
function clearDispaly() {
    display.value = '';
}
function calculate() {
    try {
        display.value = eval(display.value); 
        // setInterval(() => {
        //     clearDispaly();
        // }, 3000);
    } catch(error)
    {
         display.value = 'Error';
    }
    

}