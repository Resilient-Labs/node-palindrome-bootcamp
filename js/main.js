// const button = document.querySelector('button')
document.querySelector('button').addEventListener('click', getPalindrome)

function getPalindrome(){
  
  const userInput = document.querySelector('#userinput').value

  fetch(`/api?student=${userInput}`)
  .then(response => response.json())
  .then((data) => {

    console.log(data);
    document.querySelector("h2").textContent = data.chicken

  });

}
// function makeReq(){

//   let str1 = userInput.value
  
//   const solution = str1.split('').reverse().join('')
  
//   if(str1 === solution){
//     document.querySelector('h2').innerText= "Yes!"
//   }else{
//     document.querySelector('h2').innerText= "No!"
//   }

// }
// button.addEventListener('click', makeReq)
