document.querySelector('#checker').addEventListener('click',getPalindrome)


function getPalindrome(){
    let textCheck = document.querySelector('#textInput').value.toLowerCase();
    
    console.log(textCheck)

    fetch(`/api?palindrome=${textCheck}`)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            document.querySelector('.result').innerText = data.result;
        })

}