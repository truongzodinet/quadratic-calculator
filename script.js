let first_number = document.querySelector("#first_number");
let second_number = document.querySelector("#second_number");
let third_number = document.querySelector("#third_number");
const button = document.querySelector("#btn");
const display = document.querySelector("#result");

const reset = () => {
    first_number.value = "";
    second_number.value = "";
    third_number.value = "";
    display.innerText = "No have result: ";
}

const getResult = (a, b, c) => {
    let delta = Math.pow(b, 2) - 4 * a * c;
    let result = "";

    if (a === 0) {
        result = 'No solution, no root';
    }

    else{
        if (delta < 0) {
            result = 'The equation no have solution';
        }
        if (delta === 0) {
            result = `The equation have double root: X1 = X2 = ${(-b / (2 * a)).toString()}`;
        }
        if (delta > 0) {
            result = `The equation have two root: X1 = ${((-b + Math.sqrt(delta)) / (2 * a)).toString()} and X2 = ${((-b - Math.sqrt(delta)) / (2 * a)).toString()}`;
        }
    }
    return result;
}

button.addEventListener("click", () => {
    if (first_number.value && second_number.value && third_number.value) {
        display.innerText = 'Result: ' + getResult(parseFloat(first_number.value), parseFloat(second_number.value), parseFloat(third_number.value));
    } else {
        alert("Please fill all fields");
    }
});