const wordInput = document.querySelector('#word')
const button = document.querySelector('#clickMe')
const reverse = document.querySelector('h2')
console.log(window)

function reverseString(){
  const str1 = wordInput.value
  fetch(`/api?word=${str1}`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    reverse.textContent = data.result
  })
}

button.addEventListener("click", reverseString)



//   const solution = str1.split('').reverse().join('')

//   if( str1 === solution){
//     reverse.innerText = "Yes"
//   }else{
//     reverse.innerText = "No"
//   }
//   }

// button.addEventListener('click', reverseString)

