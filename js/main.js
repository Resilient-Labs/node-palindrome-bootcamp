






function makeReq(){
  const userName = document.querySelector('#userInput').value
 fetch(`/api?student=${userName}`)
 .then(response => response.json())
 .then((data) => {
  console.log(data);
  document.querySelector('#result').textContent = data.keepItP
 })
}
  //let str1 = userInput.value
  //let str2 = userInput.value
  //const solution = str2.split('').reverse().join('')
  //if(str1 === solution){
   // document.querySelector('p').innerText = "Yes!"
  //}else{
    
  //}

document.querySelector('button').addEventListener('click', makeReq)
  