document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){
  const string = document.querySelector("#string").value;

  fetch(`/api?string=${string}`)
    .then(response => response.json())
    .then((data) => {
      document.querySelector("#word").textContent = `Your word: ${data.string}`
      document.querySelector("#isPalindrome").textContent = `This word is ${data.isPalindrome ? '' : 'not'} a palindrome`
      console.log(data.stripped)
    });
};
