//followed codewars for the server.js 

//add event listener for click
document.querySelector('#clickMe').addEventListener('click', getPalindrome)

//fetch
function getPalindrome(){
  const input = document.querySelector('#input').value

  fetch(`api?palindrome=${input}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);


    document.querySelector('#result').textContent = data.result
  })
}