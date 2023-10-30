//Iterate over the string from forward and backward direction
//Check if the character match
//Return false for the first character that does not match 
//Return true if all the comparisons are performed and the characters match

document.querySelector('button').addEventListener('click',checkPalindrone)
function checkPalindrone(){
    const CheckWord = document.querySelector('input').value.toLocaleLowerCase()
    let rev = ''
   
    for( i = CheckWord.length-1; i>=0; i--){ // reverse approach
        
        rev += CheckWord[i]
        
        if(rev === CheckWord){
            console.log("true")
        }else if(rev != CheckWord){
            console.log('err')
        }
        
    }
}