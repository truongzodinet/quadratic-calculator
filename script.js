let first_number = document.querySelector("#first_number");
let second_number = document.querySelector("#second_number");
let third_number = document.querySelector("#third_number");
const button = document.querySelector("#btn");
const display = document.querySelector("#result");

function getResult(a, b, c) {
    let delta = Math.pow(b) - 4 * a * c;
    let result = "";

    if (delta < 0) {
        result = 'No solution';
    }
    if (delta === 0) {
        result = 'x1 = x2 = ' + (-b / (2 * a)).toString();
    }
    if (delta > 0) {
        result = 'x1 = ' + ((-b + Math.sqrt(delta)) / (2 * a)).toString() + ' and x2 = ' + ((-b - Math.sqrt(delta)) / (2 * a)).toString();
    }
    return result;
}

button.addEventListener("click", () => {
    console.log('oke');
    if (first_number.value && second_number.value && third_number.value) {
        display.innerText = getResult(parseFloat(first_number.value), parseFloat(second_number.value), parseFloat(third_number.value));
    }
});