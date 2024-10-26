export function palindromeChecker(word) {
  word = word.trim().toLowerCase(); 

  //remove anything that is not a letter
  word = word.replaceAll(/[^a-z]/g, ''); 

  let left = 0; 
  let right = word.length - 1; 

  while (left < right) {
    
    if (word[left] !== word[right]) {
      return false; 
    }
    left++; 
    right--; 
  }

  return true; 
}

console.log(palindromeChecker('word')); //false
console.log(palindromeChecker('anna')); //true
console.log(palindromeChecker('Borrow or rob?')); //true
console.log(palindromeChecker('UFO tofu')); //true
