let btn = document.querySelector('#button');
let result = document.querySelector('#result');
let eman = document.querySelector('#name');

function palinDrome() {
    const stringers = eman.value;
    fetch(`/api?name=${stringers}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            result.textContent = data.result;
        });
}

btn.addEventListener('click', palinDrome);