document.querySelector('#button').addEventListener ('click', getPalindrome)
const isNotFather = `<iframe src="https://giphy.com/embed/yHulPRl51Cy64" width="480" height="288" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`

const isFather = `<iframe src="https://giphy.com/embed/12KlnTn1BqhSgg" width="480" height="341" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`

function getPalindrome(){
  const userWord = document.querySelector('#word').value

  fetch (`/api?word=${userWord}`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    if (data.isPalindrome){
      document.querySelector('#result').innerText='Your word IS a palindrome'
      document.querySelector('#giphy').innerHTML=isFather

    }else{
      document.querySelector('#result').innerText='Your word IS NOT a palindrome'
      document.querySelector('#giphy').innerHTML=isNotFather

    }
  })
  }

  //had help from classmates and developer friend