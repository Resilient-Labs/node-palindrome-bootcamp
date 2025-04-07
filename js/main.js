//grab elements in the dom
//event listener click
//grab value from input
//function that uses fetch to make a request to server.js
//display result via innerText

document.querySelector('button').addEventListener('click', checkPalindrome);

function checkPalindrome(){
    console.log('button working line 10');
    let enterWord = document.querySelector('#enterWord').value;
    let url = `/palindrome?word=${encodeURIComponent(enterWord)}`; //encodeURIComponent makes sure value from input maintains valid URL syntax so things like spaces don't affect it
    fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Couldn't send back response");
            }
            // console.log("response obj in json", res.json)
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector('#result').innerText = data.word; //data.(something);
            if(data.isPalindrome === true){
                document.querySelector('#resultSentence').innerText = `${data.word} is a Palindrome`;
            } else {
                document.querySelector('#resultSentence').innerText = `${data.word} is not a Palindrome`;
            }
        })
        .catch(err => {
            console.log(err);
        })
}