const btn = document.querySelector('#clickbtn')
const reverseName = document.querySelector('h2')

function reverseReverse(){
 const nameInput = document.querySelector('#name').value
 fetch(`/api?string=${nameInput}`)
   .then(response => response.json())
   .then((data) => {
     console.log(data);
     reverseName.textContent = data.status
   });
}

btn.addEventListener('click', reverseReverse);
