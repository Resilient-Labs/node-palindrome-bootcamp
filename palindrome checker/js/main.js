//  function isPalindrome(s,i) {
//      return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
//     }
//     console.log(isPalindrome('test'));
//    console.log(isPalindrome('racecar'));

document.querySelector('button').addEventListener('click', checkPal)

  // function checkPal(){

  //   const isPal = document.querySelector("input").value;

  //    fetch(`/api?isPal=${isPal}`)
  //      .then(response => response.json())
  //     .then((data) => {
  //        console.log(data);
  //       document.querySelector("p").innerHTML = data.status

  //       .catch (err => console.error('Error:', err));
  //      });
  //     }
      //Above is my failed attempt at making the code server side i Keep getting a 404 server not found and 'not a valid JSON' error each time i run the server so i put the logic clientside just so that it runs
      function isPalindrome(s, i = 0) {
        if (i >= s.length / 2) {
            return true;
        }if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }return isPalindrome(s, i + 1);
    }
    
    function checkPal() {
        const inputWord = document.querySelector('input').value
        const isInputPalindrome = isPalindrome(inputWord); 
        document.querySelector('p').innerHTML = isInputPalindrome ? 'true' : 'false';
        console.log(isInputPalindrome);
    };
    
    

      
   