const form = document.querySelector('#checkForm');
const input = document.querySelector('#wordInput');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const word = input.value;

  // The palindrome check happens on the server; the browser only sends the word.
  fetch(`/api/check?word=${encodeURIComponent(word)}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        result.textContent = data.error;
        result.className = 'error';
      } else if (data.isPalindrome) {
        result.textContent = `Yes! "${data.word}" is a palindrome.`;
        result.className = 'yes';
      } else {
        result.textContent = `No, "${data.word}" is not a palindrome.`;
        result.className = 'no';
      }
    })
    .catch((err) => {
      console.error('Request failed:', err);
      result.textContent = 'Could not reach the server. Is it running?';
      result.className = 'error';
    });
});
