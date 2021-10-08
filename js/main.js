// create query selectors
// add event listener that will listen for event (button click), then it will run a function
// create a function that will take the information that is being passed in
// Palindrome Parameters: input value can be a string, number, lower-case / upper-case
document.querySelector('button').addEventListener('click', palindrome)
function palindrome(){
    // declare variable that holds input value and makes input lower-case if it is a string
    let string = document.querySelector('input').value.toLowerCase()
    // declare another variable that holds value of "string" variable. Input value will be split into an array, split('') turns string from 'fat cat' to ['f', 'a', 't', ' ', 'c', 'a', 't']
    let reverseStr = [...string].reverse().join('')

        console.log(string)
        console.log(reverseStr)
    if (reverseStr === string){
        console.log('yepp')
    }else {
        console.log('noppe')
    }
}