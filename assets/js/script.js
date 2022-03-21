let calcBtn = document.querySelector('#calc-btn');
let backBtn = document.querySelector('#back-btn');


calcBtn.addEventListener('click', function () {
    const result = calcCalorie();
    showResult(result);

    console.log(result);

    hideInputs();
    barForward();
    showOutput();
    
    calcBtn.classList.add('common__display-none');
    backBtn.classList.remove('common__display-none');
});


backBtn.addEventListener('click', function () {
    showInputs();
    barBack();
    hideOutput();

    backBtn.classList.add('common__display-none');
    calcBtn.classList.remove('common__display-none');
});


function calcCalorie() {
    const calorPerHundGrams = parseInt(document.querySelector('#per-hundred-grams').value);
    const gramsPerPiece = parseInt(document.querySelector('#one-piece-grams').value);
    const productUnits = parseInt(document.querySelector('#product-units').value);
    const array = [];

    let oneGram = calorPerHundGrams / 100;

    const prodWeight = gramsPerPiece * productUnits;
    const result = oneGram * prodWeight;

    array.push(result);
    array.push(prodWeight);

    return array;
}

function showResult(array) {
    const [result, prodWeight] = array;
    const outputTitle = document.querySelector('.output__title');
    const outputText = document.querySelector('.output__text');

    outputTitle.textContent = `${parseInt(result)} ккал`;
    outputText.textContent = `На ${prodWeight} грамм`;
}


function hideInputs() {
    let inputWrapper = document.querySelector('.inputs');

    inputWrapper.classList.add('input__hide');
    inputWrapper.classList.add('input__abs');

    if (inputWrapper.classList.contains("input__show")) {
        inputWrapper.classList.remove('input__show');
    }
}

function showInputs() {
    let inputWrapper = document.querySelector('.inputs');

    inputWrapper.classList.add('input__show');
    inputWrapper.classList.remove('input__abs');

    if (inputWrapper.classList.contains("input__hide")) {
        inputWrapper.classList.remove('input__hide');
    }

     // let inputs = document.querySelectorAll('.input');
    // for (const input of inputs) {
    //     input.classList.add('input__show');
    //     input.style.cursor = 'auto';

    //     if (input.classList.contains("input__hide")) {
    //         input.classList.remove('input__hide');
    //     }
    // }
}

function barForward() {
    let firstBar = document.querySelector('#first-bar');
    let secondBar = document.querySelector('#second-bar');
    let middleLine = document.querySelector('#middle-line');

    firstBar.classList.add('bar__forward-reverse');
    secondBar.classList.add('bar__forward');
    middleLine.classList.add('line-move__forward');

    firstBar.classList.remove('bar__back-reverse');
    secondBar.classList.remove('bar__back');
    middleLine.classList.remove('line-move__back');

}

function barBack() {
    let firstBar = document.querySelector('#first-bar');
    let secondBar = document.querySelector('#second-bar');
    let middleLine = document.querySelector('#middle-line');

    firstBar.classList.add('bar__back-reverse');
    secondBar.classList.add('bar__back');
    middleLine.classList.add('line-move__back');

    firstBar.classList.remove('bar__forward-reverse');
    secondBar.classList.remove('bar__forward');
    middleLine.classList.remove('line-move__forward');
}


function showOutput() {
    let output = document.querySelector('.output');
    output.classList.remove('common__display-none');

    output.classList.add('output__show');
    output.classList.remove('input__abs');

    if (output.classList.contains("output__hide")) {
        output.classList.remove('output__hide');
    }
}

function hideOutput() {
    let output = document.querySelector('.output');

    output.classList.add('output__hide');
    output.classList.add('input__abs');

    if (output.classList.contains("output__show")) {
        output.classList.remove('output__show');
    }
}

