let submit = document.getElementById('submit')

submit.addEventListener('click', isItAPalindrome)

function isItAPalindrome(){
    let word = document.querySelector('#input').value

    fetch(`/api?word=${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.isPalindrome === true){
                document.querySelector('#answer').innerText = `${word} is a Palindrom`
            }else {
                document.querySelector('#answer').innerText =`${word} is not a Palindrom`
            }
        })
}
