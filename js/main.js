//obtener valor
//verifica que sea palindrome
document.querySelector("#check-palindrome").addEventListener('click',checkPalindrome);



function checkPalindrome(){
    let wordEnter = document.querySelector("#word").value;
    wordEnter=wordEnter.toLowerCase();
   
    fetch(`/api?palindrome=${wordEnter}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        console.log(data);
        document.querySelector('.container-result').style.display="block";
        document.querySelector('.result').innerText = data.results;
    })
}

