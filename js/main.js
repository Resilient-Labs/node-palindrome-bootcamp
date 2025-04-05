document.querySelector('button').addEventListener('click', palinChecker)



function palinChecker() {
  let inputVal = document.querySelector('#input').value
  fetch(`/api?palindrome=${inputVal}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('#result').innerText = data.result
  
    })

    .catch(err => {
    console.log(`error: ${err}`)
  })

}