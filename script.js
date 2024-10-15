document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });

    const elements = {};
    for (const name of [`bedrooms`]) {
        elements[name] = document.getElementById(name);
    }

    function handleInputChange() {
        calculateTotal();
    }

    function calculateTotal() {
        const amount = elements.bedrooms.valueAsNumber || 0;
        const total = 300 + amount * 50;
        document.getElementById('total').innerText = total.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    }
});
