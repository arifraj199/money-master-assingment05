// get input value
function getInput(property) {
    const inputField = document.getElementById(property + '-cost');
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

// adding expenses balance
function addExpenses(foodCost, rentCost, clothesCost) {
    return foodCost + rentCost + clothesCost;
}
// get expenses balance
function expensesBalance() {
    const balanceInput = document.getElementById('expenses-total');
    balanceInput.innerText = addExpenses(getInput('food'), getInput('rent'), getInput('clothes'));
    const expenseTotalBalance = balanceInput.innerText;
    return expenseTotalBalance;
}

// get balance total
function balanceTotal() {
    const balanceInput = document.getElementById('balance-total');
    const inputValue = getInput('income');
    balanceInput.innerText = inputValue;
}
// adding total balance
function addTotal(total, expenses) {
    return total - expenses;
}
// get balance count 
function updateTotalBalance(property) {
    const balanceInput = document.getElementById(property + '-total');
    const balanceTotal = balanceInput.innerText;
    const expenseTotalBalance = expensesBalance('expenses');
    const updateCost = parseFloat(balanceTotal) - parseFloat(expenseTotalBalance);
    balanceInput.innerText = updateCost;
    return updateCost;
}

// get saving balance count
function saveBalance(property) {
    const balanceInput = document.getElementById(property);
    const reminingAmount = document.getElementById('remaining-amount');
    const getIncomeValue = getInput('income');
    const totalBalanceInput = document.getElementById('balance-total');
    const totalBalance = parseFloat(totalBalanceInput.innerText);
    const getSaveValue = getInput('save');

    const savingCalculation = (getSaveValue * getIncomeValue) / 100;
    balanceInput.innerText = savingCalculation;

    reminingAmount.innerText = totalBalance - savingCalculation;
}


// calculate button 
const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', function() {
    const errorMessage = document.getElementById('error-message');
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');

    // error message for calculate cost
    if (foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        balanceTotal();
        expensesBalance();
        updateTotalBalance('balance');
        errorMessage.innerText = '';
    } else if (foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        errorMessage.innerText = 'please enter positive number';
        document.getElementById('expenses-total').innerText = 0;
    } else {
        errorMessage.innerText = 'please input integer number';
        document.getElementById('expenses-total').innerText = 0;
    }
});

//save button 
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', function() {
    const errorThrow = document.getElementById('error-throw');
    const remainingBalance = document.getElementById('remaining-amount');
    const savingAmount = document.getElementById('saving-amount');

    const getIncomeValue = getInput('income');
    const totalBalanceInput = document.getElementById('balance-total');
    const totalBalance = parseFloat(totalBalanceInput.innerText);
    const getSaveValue = getInput('save');
    const savingCalculation = (getSaveValue * getIncomeValue) / 100;

    // error message for saving amount
    if (savingCalculation <= totalBalance && getSaveValue > 0) {
        saveBalance('saving-amount');
        errorThrow.innerText = '';
    } else if (getSaveValue < 0) {
        errorThrow.innerText = 'please provide positive integer';
        savingAmount.innerText = 0;
        remainingBalance.innerText = totalBalance;
    } else if (savingCalculation > totalBalance) {
        errorThrow.innerText = 'you dont have enough money';
        savingAmount.innerText = 0;
        remainingBalance.innerText = totalBalance;
    } else {
        errorThrow.innerText = 'please provide valid number';
        savingAmount.innerText = 0;
        remainingBalance.innerText = totalBalance;
    }
});