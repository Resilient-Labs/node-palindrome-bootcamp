document.querySelector('#magic').addEventListener('click', palindrome)

function palindrome(){
    // const word = document.getElementById('info').value 
    const word = document.querySelector('#info').value
    const result = document.querySelector('#result')

    if(!word.trim()){ // Clicking the button with nothing entered will produce this message.
        result.innerText = 'The mirror needs a word first.'
        return
    }

    // fetch(`/api?palindrome=${word}`)
    fetch(`/api?palindrome=${encodeURIComponent(word)}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)

        if(data.yesOrNo === 'yes'){
            result.innerText = word + ' - Ah, a perfect reflection! Indeed, a palindrome, my dear.'
        }else{
            result.innerText = word + ' - Alas, the reflection is distorted. Not a palindrome.'
        }
    })
    .catch(err => console.log(err))
}
