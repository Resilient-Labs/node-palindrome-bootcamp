let check = document.querySelector("button")

//creating a function and passing in a string
function palindrome() {
  let str = document.getElementById('str').value
  str = str.toLowerCase().replace(/[^a-z]+/g,"");
  //console.log('derp', str)
  if (str === str.split("").reverse().join("")){
    document.getElementById("result").innerHTML = "palindrome";
}else{
  document.getElementById("result").innerHTML = "not a palindrome";
}
}


//function that puts text into the dom
//adding an event listener to the button
check.addEventListener('click', () => palindrome(str))
