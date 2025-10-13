// <!-- Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side. -->

document.querySelector('button').addEventListener('click', getCheck)


function getCheck() {
    let string = document.querySelector('input').value;
    const url = `/isPal?q=${string}`
    fetch (url)
    .then(res => res.text())
    .then(data => {
        alert(data)
    })
}