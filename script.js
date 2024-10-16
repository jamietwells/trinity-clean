document.addEventListener('DOMContentLoaded', function () {
    const elements = {
        propertyType: document.getElementById('propertyType'),
        bedrooms: document.getElementById('bedrooms'),
        bathrooms: document.getElementById('bathrooms'),
        separateBathrooms: document.getElementById('separateBathrooms'),
        ovenClean: document.getElementById('ovenClean')
    };

    // Attach event listeners to all inputs
    Object.values(elements).forEach(element => {
        element.addEventListener('input', calculateTotal);
    });

    function calculateTotal() {
        const propertyType = elements.propertyType.value;
        const bedrooms = elements.bedrooms.valueAsNumber || 0;
        const bathrooms = elements.bathrooms.valueAsNumber || 0;
        const separateBathrooms = elements.separateBathrooms.valueAsNumber || 0;
        const ovenClean = elements.ovenClean.checked;

        // Base price depending on property type
        let total = (propertyType === 'flat') ? 185 : 195;

        // Add bedroom charges
        if (bedrooms === 2) total += 50;
        else if (bedrooms === 3) total += 75;
        else if (bedrooms >= 4) total += 100;

        // Add bathroom charges
        total += bathrooms * 20; // en suite or downstairs W/C
        total += separateBathrooms * 30; // separate bathrooms

        // Add oven clean charge if applicable
        if (ovenClean) total += 40;

        // Display the total
        document.getElementById('total').innerText = total.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    }
});