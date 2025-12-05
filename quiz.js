function checkAnswer() {
    const correctAnswer = "4";

    // Retrieve user's selected option
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the button and add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);