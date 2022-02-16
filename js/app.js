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

// get saving balance count
function saveBalance(property) {
    const balanceInput = document.getElementById(property);
    const reminingAmount = document.getElementById('remaining-amount');
    const totalBalanceInput = document.getElementById('balance-total');
    const totalBalance = parseFloat(totalBalanceInput.innerText);
    const getSaveValue = getInput('save');

    const savingCalculation = (parseFloat(getSaveValue) * totalBalance) / 100;
    balanceInput.innerText = savingCalculation;

    reminingAmount.innerText = totalBalance - savingCalculation;
}

// calculate button 
const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', function() {

    // const foodCostValue = getInput('food');
    // const foodCost = parseFloat(foodCostValue)
    // const rentCostValue = getInput('rent');
    // const rentCost = parseFloat(rentCostValue);
    // const clothesCostValue = getInput('clothes');
    // const clothesCost = parseFloat(clothesCostValue);

    updateTotalBalance('balance');
    expensesBalance('expenses');

});

//save button 
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', function() {
    // const balanceTotal = document.getElementById('balance-total').innerText;
    // const balance = parseInt(balanceTotal);
    // const savingBalance = document.getElementById('saving-amount').innerText;
    // const saving = parseInt(savingBalance);
    saveBalance('saving-amount');

    // if (saving < balance) {

    // } else if (saving > balance) {
    //     alert('out of total balance.please save less than total balance');
    // }


})