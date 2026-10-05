// Run the function when the button is clicked
document.getElementById("checkButton").addEventListener("click", checkPalindrome);

function checkPalindrome() {
    let word = document.getElementById("text").value.toLowerCase();

    if (word === "") {
        document.getElementById("result").textContent = "Enter a word first.";
    } else {
        // Send the word to the server
        fetch("/api?text=" + word)
            .then(function (response) {
                // Read the server's answer
                return response.json();
            })
            .then(function (data) {
                // Display the answer
                document.getElementById("result").textContent = data.message;
            });
    }
}