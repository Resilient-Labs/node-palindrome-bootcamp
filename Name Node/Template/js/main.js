document.getElementById('check').addEventListener('click', start)
  //gets value from input
function start(){
  let content = document.querySelector('input').value

  let backword = content.split('').join('')
  fetch(`/api?word=${backword}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('h2').textContent = data.palindrome
    console.log(data);

  // getting data from palidrome in server

});
}
