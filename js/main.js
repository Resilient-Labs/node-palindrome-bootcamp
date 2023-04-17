async function processInput() {
  const firstName = document.getElementById('first-name-input').value;

  try {
      const response = await fetch('/generate-palindrome', {
          method: 'POST',
          body: firstName,
          headers: {
              'Content-Type': 'text/plain'
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const palindrome = await response.text();
      document.getElementById('result').innerText = `Palindrome: ${palindrome}`;
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}

document.getElementById('generate-button').addEventListener('click', processInput);


