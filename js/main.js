document.querySelector('input[type=button]').addEventListener('click', makePalReq)

function makePalReq(){
  let stringToCheck = document.querySelector('input[type=text]').value
  fetch(`/palcheck?string=${stringToCheck}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      console.log(data.isPalindrome)
      if (data.isPalindrome === true) {
        document.querySelector('h3').innerText = `Confirmed palindrome`
      } else if (data.isPalindrome === false) {
        document.querySelector('h3').innerText = `Not a palindrome`
      }
    })
}
