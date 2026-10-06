document.querySelector("#Chanely").addEventListener("click", palindrome)

function palindrome() {

    const word = document.getElementById('info').value
    const result = document.querySelector('#result')

   if (!word.trim()) {
    result.innerText = 'Please type something in the box to begin'
    return
}
fetch(`/api?palindrome=${encodeURIComponent(word)}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);

        if (data.yesOrNo === "yes") {
            result.innerText = "Yes, this is a palindrome!";
        } else {
            result.innerText = "No, this is not a palindrome!";
        }
    })
    .catch(err => {
        console.log(err);
        result.innerText = "Something went wrong.";
    });

}