document.querySelector('button').addEventListener('click', makeReq)
const placeholder = document.querySelector('.results');

function makeReq(){
  console.log("inside makeReq")
  const input = document.querySelector("input").value;
  // url starting point for data analytics
  fetch(`/api?palindrome=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      //data is a json object that we have gotten from
      //the server
      placeholder.innerText = data.palindrome

    });

}
