document.querySelector('#button').addEventListener('click',makeReq)

function makeReq(){
    const input = document.querySelector('#input').value

    fetch(`/api?word=${input}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        document.querySelector("#answer").innerText = data.answer
        })
      .catch (err => {
        console.log(`Error ${err}`)
        })
}
  
// Below goes in server
// function check (){
//     word = this.string.toLowerCase()
//     word = lowerCase.split('').reverse().join('')
//     let reverse = word
//     if(word === reverse){
//         document.querySelector("#answer").innerHTML = `This word is a palindrome`
//     }else if( word !== reverse){
//         document.querySelector("#answer").innerHTML = `This word is not a palindrome`
//     }else{
//         document.querySelector("#answer").innerHTML = `Not a valid entry!`
//     }
// }
