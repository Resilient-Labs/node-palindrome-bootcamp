document.querySelector("#clickMe").addEventListener("click", makeReq);

function makeReq() {
	const str = document.querySelector("#input").value.trim();

	fetch(`/api?palindrome=${str}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			document.querySelector("#result").textContent = data.result;
		});
}
