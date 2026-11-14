document.querySelector('#checkPali').addEventListener('click', paliTrueFalse)


function paliTrueFalse(){
    let wordCheck = document.querySelector('#wordCheck').value.toLowerCase() //this is the user input value that gets sent to the server
    console.log(wordCheck)

    fetch(`/api?palindrome=${wordCheck}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        document.querySelector('#result').textContent = data.message; //the message is the object I create in the server
    });


}