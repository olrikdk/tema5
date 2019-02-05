
        function calculateBmi() {
    var weight = document.bmiForm.weight.value;
    var height = document.bmiForm.height.value;

    if (weight > 0 && height > 0) {

        var finalBmi = weight / (height / 100 * height / 100);
        document.getElementById("displayResult").p[0].innerHTML = "Your BMI is " + finalBmi;
        var displayResult = document.getElementById("displayResult");
        displayResult.className = "open";

        if (finalBmi < 18.5) {
            document.getElementById("displayResult").p[1].innerHTML = "You are too slim. You should see your doctor."
        }
        else if (finalBmi >= 18.5 && finalBmi <= 25) {
            document.getElementById("displayResult").p[1].innerHTML = "You are in the correct weight range."
        }
        else {
            document.getElementById("displayResult").p[1].innerHTML = "You are overweight. You should see your doctor."
        }
    }
    else {
        alert("Enter data in the fields!");
    }
}


