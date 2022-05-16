const button = document.querySelector('button')
const input = document.querySelector('input')
const pal = document.querySelector('h1')

button.addEventListener('click', checkPal)

function checkPal() {
    let word = input.value
    let wordPal = word.split('').reverse().join('')
    console.log(wordPal)
    if( word === wordPal) {
        console.log('WTF')
    } else {
        alert('PFFFFFT')
    }
}