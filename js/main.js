//Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
// If it is a number, we need to change it to a string to compare how it reads backwards and forwards.
// If it is an object, we need to somehow also change it to a string to do a comparison.
// If it is a string, we can forge ahead.
// If we have null or undefined, how do we handle that?

// input = hello


//do the task, solve it , and delete it, until you never have to see the solution



document.querySelector('button').addEventListener('click', isPalindrome) //event listeners for button heads


function isPalindrome() {
    let text = document.querySelector('input').value 
    //----------------------------fetch
    fetch(`/api?result=${text}`)  //add parameter 'result' and set it equal to input
      .then(response => response.json())
      .then((data) => {
        console.log(data);
  

        document.querySelector('#answer').textContent = data.result //grab result from json'

        document.querySelector('#reversedAnswer').innerText = data.reversed
    });

    //-----------------------------fetch

    // spread operator(array/string) [...text] - h e l l o | reverse- 'o' 'l' 'l' 'e' 'h' | join - olleh
    //let reverse = [...text].reverse().join('')
    //need to check if it is the same , the regular string and the reverse
    // if( text === reverse ){
    //     document.querySelector('#answer').innerText = 'true'
    //     document.querySelector('#reversedAnswer').innerText = reverse 
    // }
}


///bugs : should have been value instead of inner text. line 18 main.js




 





