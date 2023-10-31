document.querySelector('#clickMe').addEventListener('click', makeReq)
function makeReq() {
  const name = document.querySelector("#userName").value;
  if (name) {
    fetch(`/api?palindrome=${name}`)
    .then(response => response.json())
    .then((data) => {
      document.querySelector("#personName").textContent = `${data.name} backwards is ${data.reversedInput}`
      data.palindrome == true ? document.querySelector('#personStatus').textContent =  `${data.name} is a palindrome.` : document.querySelector('#personStatus').textContent = `${data.name} is not a palindrome.`
    });
  };
};