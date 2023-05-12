const form = document.getElementById('palindrome-form');
const input = document.querySelector('.input-word');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputValue = input.value.trim().toLowerCase();

    const response = await fetch('/check-palindrome', {
        method: 'POST',
        body: inputValue
    });

    const result = await response.text();
    result.textContent = result;
});
