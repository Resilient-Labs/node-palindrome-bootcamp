//Create a simple web application that uses the fs 
// and http modules to validate if a string is a palindrome server side.

document.querySelector("button").addEventListener("click",getInfo)

function getInfo(){

    const getPal = document.querySelector("#blank").value;
    console.log(getPal)

    fetch(`/api?gotPali=${getPal}`)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data)
    {
        console.log(data.resultado)
        document.querySelector("#hthree").innerText = getPal;
        document.querySelector("#hcuatro").innerText = data.resultado
    })



    // palindfrome left and right 
    // if the name spells out the same backwards it IS TRUE
    //if the name doesnt spell out the same backwards it is FALSE

//document.querySelector("#hthree").innerText = getPal;

}