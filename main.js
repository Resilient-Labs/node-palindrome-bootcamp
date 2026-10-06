// Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
    // document.querySelector('#Click Me').addEventListener('click', makeReq)

    // function makeReq(){

    // const userName = document.querySelector("user-input").value;

    // fetch(`/api?input=${userName}`)
    //     .then(response => response.json())
    //     .then((data) => {
    //     console.log(data);
    //     // document.querySelector("#personName").textContent = data.name
    //     // document.querySelector("#personStatus").textContent = data.status
    //     // document.querySelector("#personOccupation").textContent = data.currentOccupation
    //     });

    // }

document.querySelector('#check-button').addEventListener('click', function () {
    const result = document.querySelector('#result');
    const userInput = document.querySelector('#user-input').value.trim();


    result.textContent = 'Loading...';
    let timeout = setTimeout(() => {
        // How much time it takes to check if the string is a palindrome
        const input = document.querySelector('#user-input').value;

        if (input === input.split('').reverse().join('')) {
            result.textContent = 'Palindrome';
        } else {
            result.textContent = 'Not a palindrome';
        }
    }, 500);
});
        // Make a fetch request to the server to check if the string is a palindrome
    fetch(`/api?string=${user-input}`)
        .then(response => response.json())
        .then(data => {
            if (data.isPalindrome) {
    }
});