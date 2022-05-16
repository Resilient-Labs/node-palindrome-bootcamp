let inputWord = document.querySelector('input')
let message = document.querySelector('p')


function reverseWord(e){
    e.preventDefault()
    let inputWord = document.querySelector('input').value
    if(inputWord === ''){
      return message.innerText = 'Please enter a word.'
    }else{
  
      fetch(`/checker?word=${inputWord}`)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          message.innerText = data.PalindromeResponse

        });
    }
  }

document.querySelector('button').addEventListener('click', reverseWord)