//on the client side. we will have an input to get the user's input and a button they can click
//when they enter a string that string will be posted to the backend and get a response back

const form = document.querySelector('form');
form.addEventListener('submit', (e) => checkPali(e));

function checkPali(e) {
  e.preventDefault();
  const word = document.querySelector('#word').value;
  const url = `/api?word=${word}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((res) => {
      document.querySelector('#result').textContent = `${word} ${res.result ? 'is' : 'IS NOT'} a palindrome `; 
    })
    .catch((err) => console.log(err));
}

