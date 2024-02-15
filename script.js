const loan_amount = document.getElementById('loan-amount');
const loan_tenure = document.getElementById('loan-tenure');
const loan_interest = document.getElementById('loan-interest');

const submitbtn = document.querySelector(".btn");
const emiResult = document.querySelector(".loan_emi");
const principleResult = document.querySelector(".loan_principle");
const interestRateResult = document.querySelector(".loan_interest_rate");
const totalResult = document.querySelector(".loan_total");

submitbtn.addEventListener('click', function() {

    const amount = parseFloat(loan_amount.value);
    const tenure = parseFloat(loan_tenure.value) * 12;
    const rate = parseFloat(loan_interest.value) / 12 / 100;

    const emi = (amount * rate * Math.pow((1 + rate), tenure)) / (Math.pow((1 + rate), tenure) - 1);

    const total = emi * tenure;
    const interest = total - amount;

    emiResult.textContent = emi.toFixed(2);
    principleResult.textContent = amount.toFixed(2);
    interestRateResult.textContent = (rate * 12 * 100).toFixed(2) + '%';
    totalResult.textContent = total.toFixed(2);

});
