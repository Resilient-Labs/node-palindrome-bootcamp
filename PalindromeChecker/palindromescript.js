document.getElementById('button').addEventListener('click', palindrome)

function palindrome(){
    let strInput = document.querySelector('#checkName').value
    let strOutput = ""
    for(let i = strInput.length-1; i >= 0; i--)
        {
        strOutput = strOutput + strInput[i];
        }
        
        if( strInput == strOutput){
        document.querySelector(".palindrome").value = strOutput + " Yes!";
        }
        else { 
        document.querySelector(".palindrome").value = strInput + " No!";
    }
}