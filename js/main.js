document.querySelector('#clickMe').addEventListener('click', checkMe)

function checkMe() {

  const input = document.querySelector("#word").value;

  fetch(`/palcheck?word=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#message").textContent = data.isPalindrome ? "Yes it is!" : "No it is not!"
    })
  }


