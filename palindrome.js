document.querySelector('#paliBtn').addEventListener('click',getPalindrome)


async function getPalindrome(){
  let userInput=document.querySelector('#wordHere').value
  //encode uri accounts for spaces and special characters keeping the url valid
  try{
  const res = await fetch(`/api?palindrome=${encodeURIComponent(userInput)}`)
   const data = await res.json()
   console.log(data);
   document.querySelector('#placeHere').textContent= data.answer

     }   catch(error){
        console.error('Failed to fetch',error)
      

}

}
