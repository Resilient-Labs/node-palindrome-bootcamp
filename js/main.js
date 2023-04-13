const userInput = document.querySelector('#userinput')
const button = document.querySelector('button')

function makeReq(){

  let str1 = userInput.value
  let str2 = userInput.value
  
  const solution = str2.split('').reverse().join('')
  
  if(str1 === solution){
    document.querySelector('h2').innerText= "Yes!"
  }else{
    document.querySelector('h2').innerText= "No!"
  }

}
button.addEventListener('click', makeReq)
