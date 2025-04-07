class ApiRequest {
  constructor() {
    const checkButton = document.querySelector("#check-button");
    const palindromeInput = document.querySelector("#palindrome-input");
    this.checkResultElement = document.querySelector("#check-result");
  
    checkButton.addEventListener("click", () => this.checkPalindrome(palindromeInput.value));
  }

  checkPalindrome(str) {
    str = str.trim().toLowerCase();

    fetch(`api?palindrome=${str}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      this.checkResultElement.innerText = data.checkResult;
    });
  }
}

const apiRequest = new ApiRequest;