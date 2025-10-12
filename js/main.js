document.querySelector('button').addEventListener('click', getPalindrome);


async function getPalindrome() {
    const word = document.querySelector('input').value;
    console.log(word);
    const res = await fetch(`/palindrome?word=${word}`);
    const data = await res.json();
    console.log(data);
    if (data.palindrome === true && data.word !== "") {
        document.querySelector('.history').innerHTML += `<li>${data.word} is a palindrome</li>`;
    } else if (data.palindrome === false && data.word !== "") {
        document.querySelector('.history').innerHTML += `<li>${data.word} is not a palindrome</li>`;
    }
    document.querySelector('input').value = '';
}