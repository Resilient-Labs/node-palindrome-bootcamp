document.querySelector('button').addEventListener('click', checkInput)

async function checkInput(){
    const input = document.querySelector('#palindromeInput').value

    const res = await fetch('/api')
    const checkedData = await res.json()
    if(input === input.split("").reverse().join("")){
        return document.querySelector('#result').innerHTML = `
            <h2 id="correct">${input}</h2>
            <div>
                <p id="correct">${checkedData.true}</p>
            </div>
        `
    }else{
        return document.querySelector('#result').innerHTML = `
            <h2 id="wrong">${input}</h2>
            <div>
                <p id="wrong">${checkedData.false}</p>
            </div>
        `
    }
}

// function(params) {
//     return params.split("").reverse().join("");
// }