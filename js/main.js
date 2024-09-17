// here we put an event listener that runs the function on click
document.querySelector('#check').addEventListener('click', checkPalindrome)

function checkPalindrome(){  


    const userInput = document.querySelector('#word').value

    //we make a fetch request to an endpoint named /api and then we give the user input as a parameter 

    fetch(`/api?input=${userInput}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data) 
      //we then take the data and display it in our html
      document.querySelector('#answerOutput').innerText = data.output
    })
}
