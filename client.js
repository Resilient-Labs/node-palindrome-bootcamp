//Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.



document.querySelector("#button").addEventListener("click", checkWord)


function checkWord(){

    const inputText = document.querySelector("#inputText").value.toLowerCase()

  if(!inputText){
         document.querySelector("#display").innerText = "Please Enter a word!"
        return;
    }

fetch(`/api?palindrome=${inputText}`)
.then(res => res.text())
.then(data => {
    console.log(data)
    
    const reversedText = data

    if(inputText === reversedText){
    document.querySelector("#display").innerText = `"${inputText}" is a palindrome!`
   }
   else{
    document.querySelector("#display").innerText = `"${inputText}" is Not a palindrome!`
   }
})
.catch(error => console.log(error))

    

   
}
