const button = document.querySelector("button");
const display = document.querySelector("h3");
button.onclick = () => {
  const result = document.querySelector("input").value;
  fetch(`/api?student=${result}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.palin === "Yes") {
        display.innerText = `${result} is indeed a palindrome`;
      } else {
        display.innerText = `Unfortunaely, ${result} is not a palindrome`;
      }
    });
};
