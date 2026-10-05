
document.querySelector("#clickIt").addEventListener("click", getPalindrome)

function getPalindrome(){
    // variable for input
    const word = document.querySelector("#word").value


    // client always request information/ data 
    // fetch -> api to request data from the server

    fetch(`/api?palindrome=${encodeURIComponent(word)}`)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
       document.querySelector("#result").textContent = `Result : ${data.message}`
    })


}
