// alert("So I Wake Up in the Morning and...")
// I prepared all of my pseudocode for this project and then worked on it with Michael Kazin.

document.querySelector('button').addEventListener('click', checkPal)

function checkPal () {
    let strText = document.querySelector('input').value 

    fetch(`/api?word=${strText}`)
	.then(res => res.text())
	.then((data )=> alert(data))
	.catch((err) => console.error(err));
}

