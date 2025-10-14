document.querySelector('#clickMe').addEventListener('click', makeReq);
//document.querySelector('#clickMe').addEventListener('click', testFirst);


//const delay = ms => new Promise(r => setTimeout(r,ms));

async function makeReq() {

    const girafarig = document.querySelector('#palindrome').value;
    try{
        
        fetch(`/checker?palindrome=${girafarig}`)
        .then(response => response.json())
        .then((data => {
            console.log(data.answer);
        }))
    }
    catch (err) {
        console.error('error fetching data', err);
    }
    
}

function testFirst() {
    
}

