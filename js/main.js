class Palindrome {
    constructor(word){
        this._word = word;
    }

    // Getter methods
    get word() {
        return this._word;
    }

    // Setter method
    set word(value) {
        this._word = value;
    }

    // Method gets value from the DOM
    valueFromDom(id) {
        return document.querySelector(id).value
    }


    // Method uses fetch to make a request
    async retrieveData() {
        try {
            const response = await fetch(`/api?word=${this._word}`)
            const data = await response.json()

            // Place result in the DOM
            if(data.palindrome == false) {
                document.querySelector('#result').innerText = `${this._word} is not a palindrome`
            }else {
                document.querySelector('#result').innerText = `${this._word} a palindrome`
            }
    
        } catch (error) {
            console.log(error)
        }
    }
}

document.querySelector('#btn').addEventListener('click', () => {

    // Create an instance of the class Palindrome
    const palindrome = new Palindrome()

    //get the value from the input
    let userValue = palindrome.valueFromDom('#input')

    // Set the value in the Class
    palindrome.word = userValue

    // Call the fetch
    palindrome.retrieveData()
    

})