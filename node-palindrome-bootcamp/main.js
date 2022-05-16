
document.querySelector('button').addEventListener('click', isItAPalindrome)

function isItAPalindrome(){
    console.log('function hit')
    let stringFromUser = document.querySelector('input').value
    console.log(stringFromUser)
    fetch(`/api?stringFromUser=${stringFromUser}`)
            .then(response => response.json())
            .then((data)=>{
                console.log(data.result)
                document.querySelector('.answer').innerText=data.result
            })
}

