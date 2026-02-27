document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq() {
  const userName = document.querySelector("#userName").value;
  console.log(userName)
  const name = document.querySelector('h3')
  const result = document.querySelector('p')
  fetch(`/api?name=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      /**
       * obj1: 
       * name: "anna"
       * status: true
       */
      name.innerText = data.obj1.name
      if (data.obj1.status) {
        result.innerText = `${data.obj1.name} is palindrome!`
      } else {
        result.innerText = `${data.obj1.name} is not a palindrome.`
      }

    });
    deleteInput()
}

function deleteInput(){
  return document.querySelector("#userName").value = ""
}