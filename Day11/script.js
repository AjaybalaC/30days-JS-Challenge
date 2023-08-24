function calculateBMI() {
    // Get the user's weight and height input
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Check if inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height.";
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display the result
    var resultMessage = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        resultMessage += " - Underweight";
    } else if (bmi < 24.9) {
        resultMessage += " - Normal weight";
    } else if (bmi < 29.9) {
        resultMessage += " - Overweight";
    } else {
        resultMessage += " - Obesity";
    }

    document.getElementById("result").innerHTML = resultMessage;
}