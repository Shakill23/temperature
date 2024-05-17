const form = document.getElementById('temp-converter-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const temperature = parseFloat(document.getElementById('temperature').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;

            let result;

            if (fromUnit === toUnit) {
                result = temperature;
            } else if (fromUnit === 'celsius') {
                if (toUnit === 'fahrenheit') {
                    result = (temperature * 9/5) + 32;
                } else {
                    result = temperature + 273.15;
                }
            } else if (fromUnit === 'fahrenheit') {
                if (toUnit === 'celsius') {
                    result = (temperature - 32) * 5/9;
                } else { 
                    result = (temperature - 32) * 5/9 + 273.15;
                }
            } else if (fromUnit === 'kelvin') {
                if (toUnit === 'celsius') {
                    result = temperature - 273.15;
                } else { 
                    result = (temperature - 273.15) * 9/5 + 32;
                }
            }

            document.getElementById('result').value = result.toFixed(2);
        });