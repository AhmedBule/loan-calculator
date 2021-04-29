//alert('Testing to see if it works')
function loanCalculator() {

    const totalAamount = document.querySelector('#amount');
    const monthsPay = document.querySelector('#months');
    const interestRate = document.querySelector('#rate');


    // The formula for the calculation 

    let interest = (amount * (rate * 0.01)) / months;

    const total = ((amount / months) + interest).toFixed(2);

    document.querySelector('.total').textContent = "EMI : (₹)" + total;

}