// const display = document.querySelector('h2')
// const search = document.querySelector('input')
// const button = document.querySelector('button')

function getPalindrome(){
  const str1 = document.querySelector('#input').value
  
  fetch(`/api?student=${str1}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector('h2').textContent = data.keepItP
    });
}

document.querySelector('button').addEventListener('click', getPalindrome)

// const s1 = search.value
// const s2 = search.value

// const solution = s2.split('').reverse().join('')

// if(s1 === solution){
//   displayResults.innerText = 'YES!'
// }else{
//   displayResults.innerText = 'NOO'
// }