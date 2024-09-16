
const btn = document.querySelector("button")
let result = document.querySelector("h2")
const outPut = document.querySelector('span')
let palindrome;


btn.addEventListener('click', ()=>{
  palindrome = document.querySelector("input").value
  fetch(`/api?test=${palindrome}`)
  .then(res=>res.json())
  .then(res=>{
    console.log(res)
    result.textContent=res.result
  })

  // if(palindrome === solution(palindrome)){
  //   outPut.innerHTML = "This is a palindrome"
  //   console.log("This is a palindrome")
  // }else{
  //   outPut.innerHTML = "This is not a palindrome"
  //   console.log("This is not a palindrome")
  // }
  // function solution(palindrome){
  //   let split = palindrome.split("")
  //   let reverse = split.reverse()
  //   let join = reverse.join("")
  //   return join
  // }
  //
  // result.innerHTML = solution(palindrome).toLowerCase()
  // console.log(palindrome)
})
