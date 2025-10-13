const txtInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    // splitting user input character, reversing them, and joining them in a single word
    const url = `/api?textInput=${txtInput.value}`
    fetch(url)
    .then(res => res.text())
    .then(data => {
    infoTxt.innerHTML = data
    })
    infoTxt.style.display = "block";
});

txtInput.addEventListener("keyup", () => {
    // removing spaces & all special characters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

// Citation: CodingNepal
// href: https://www.youtube.com/watch?v=dLU2wN8P6yY&list=WL&index=9