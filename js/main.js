document.querySelector('#button').addEventListener('click', validate)
function validate(){

const word = document.querySelector("#word").value; 

fetch(`/api?palindrome=${word}`)
.then(res => res.json())
.then(data => {
   
   console.log(data)
   document.querySelector('#results').textContent = data.word


})
.catch(err => {
    console.log(`error ${err}`);
});

}

