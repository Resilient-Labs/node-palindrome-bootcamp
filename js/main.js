// user clicks button
//event listener on button
//


document.getElementById('palindrome').addEventListener('submit', function (e) {
    e.preventDefault(); // prevents page reload
  
    const inputValue = document.getElementById('enter').value;
  
    fetch(`/api?palindrome=${encodeURIComponent(inputValue)}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('results').textContent = data.response;
      })
      .catch(err => {
        console.log('error:', err); 
      });
  });
  
  