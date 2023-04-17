document.querySelector('#clickMe').addEventListener('click', getResult)

function getResult(){

  const userName = document.querySelector("#userName").value;

  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = data.keepItP
    });

}
console.log( document.querySelector("#result"))
// const putWord = document.querySelector('#aWord')
// const button = document.querySelector('#clickMe')
// const result = document.querySelector('h2')



// button.addEventListener('click', getResult)

// function getResult(){

//   let str1 = userName.value 


// const solution = str1.split('').reverse().join('')

// if(str1 === solution){
//   result.innerText = 'yes'
// }else{
//   result.innerText = 'no'

