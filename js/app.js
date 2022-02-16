// get input value
function getInput(property) {
    const inputField = document.getElementById(property + '-cost');
    const inputValue = inputField.value;
    return inputValue;
}

// get expenses balance
function expensesBalance(property) {
    const balanceInput = document.getElementById(property + '-total');
    const foodCostValue = getInput('food');
    const rentCostValue = getInput('rent');
    const clothesCostValue = getInput('clothes');

    balanceInput.innerText = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothesCostValue);

    const expenseTotalBalance = balanceInput.innerText;
    return expenseTotalBalance;
}

// get balance count 
function updateTotalBalance(property) {
    const balanceInput = document.getElementById(property + '-total');
    const balanceTotal = balanceInput.innerText;
    const expenseTotalBalance = expensesBalance('expenses');
    const updateCost = parseFloat(balanceTotal) - parseFloat(expenseTotalBalance);
    balanceInput.innerText = updateCost;
}

const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', function() {

    updateTotalBalance('balance');
    expensesBalance('expenses');
});