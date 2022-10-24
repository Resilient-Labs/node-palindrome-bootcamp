document.querySelector('button').addEventListener('click', palinCheck)

function palinCheck(){
str = document.querySelector('input').value
console.log(`Trying ${str}...`)
  fetch(`/palindrome?word=${str}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      ShowResult(data)
    });

}

function ShowResult(obj) {
  console.log(obj)
  if (obj.word == obj.reversed) {
    document.querySelector('p').innerText = `Your word was ${obj.word} and the result was ${obj.reversed}. It's a palindrome!`
  }

  else {
    document.querySelector('p').innerText = `Your word was ${obj.word} and the result was ${obj.reversed}. It's not a palindrome.`
  }
}