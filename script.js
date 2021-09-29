const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");


function showOutput(message){
    outputBox.innerText = message;
}

function calculateProfitLoss(initial, quantity, current){
    if(initial > current){
        const loss = initial-current;
        const lossPercent = ((loss/initial)*100).toFixed(2);
        showOutput("The loss is ${loss} and its percent is ${lossPercent}");
    } else if(initial < current){
        const profit = current-initial;
        const profitPercent = ((profit/initial)*100).toFixed(2);
        showOutput("The loss is ${profit} and its percent is ${profitPercent}");
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