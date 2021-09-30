const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");
const body = document.querySelector("body")

function showOutput(message){
    outputBox.innerText = message;
}

function calculateProfitLoss(initial, quantity, current){
    console.log(initial);
    console.log(current);
    if(initial > current){
        const loss = initial-current;
        const lossPercent = ((loss/initial)*100).toFixed(2);
        showOutput(`The loss is ${loss} and its percent is ${lossPercent}%`);
        body.style.transition = "background-color 4s ease-out";
        body.style.backgroundColor = "red";
    } else if(initial < current){
        const profit = current-initial;
        const profitPercent = ((profit/initial)*100).toFixed(2);
        showOutput(`The profit is ${profit} and its percent is ${profitPercent}%`);
        body.style.transition = "background-color 4s ease-out";
        body.style.backgroundColor = "green";
    } else {

    }
}

function submitHandler() {
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQuantity.value);
    const curr = Number(currPrice.value);

    calculateProfitLoss(ip, qty, curr);
}

submitBtn.addEventListener('click',submitHandler);