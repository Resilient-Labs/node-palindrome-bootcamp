const button = document.querySelector('button');
button.addEventListener('click', checkPalindrome)
document.querySelector("input").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    checkPalindrome()
  }
})

function checkPalindrome(){
  const input = document.querySelector('input').value.toString().trim().replace(" ", "");
  if(input === ""){ 
    document.getElementById('display').innerHTML = 'Type something'
  } else{
    fetch(`/api?reversedInput=${input}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById('display').innerHTML = data;
      })
    }
}
