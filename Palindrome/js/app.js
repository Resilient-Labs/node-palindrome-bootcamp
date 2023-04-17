const butt = document.querySelector('#thebutt')
  
function Palindrome() {
    const palindrome = document.querySelector('input').value
    const url = (`/namegame?palindrome=${palindrome}`)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#result').innerText = data.display
    })
    .catch(err => {
      alert(`error ${err}`)
    })
    }
    
butt.addEventListener('click', Palindrome)