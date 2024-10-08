function predict() {
    const age = parseInt(document.getElementById('age').value, 10);
    const smoking = parseInt(document.getElementById('smoking').value, 10);
    const pollution = document.getElementById('pollution').value.toLowerCase();
    const wheezing = document.getElementById('wheezing').value.toLowerCase() === 'yes';
    const swallowing = document.getElementById('swallowing').value.toLowerCase() === 'yes';
    const cold = document.getElementById('cold').value.toLowerCase() === 'yes';
    const cough = document.getElementById('cough').value.toLowerCase() === 'yes';

    let riskScore = 0;

    if (age > 40) riskScore += 1;
    if (smoking > 10) riskScore += 2;
    if (pollution.includes('industrial') || pollution.includes('urban')) riskScore += 1;
    if (wheezing) riskScore += 2;
    if (swallowing) riskScore += 1;
    if (cold) riskScore += 1;
    if (cough) riskScore += 1;

    let prediction = 'Low risk of COPD';
    if (riskScore >= 5) {
        prediction = 'High risk of COPD';
    } else if (riskScore >= 3) {
        prediction = 'Moderate risk of COPD';
    }

    document.getElementById('result').innerText = 'Prediction: ${prediction}';
}
