let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let tryAgainButton = document.querySelector("#try-again")

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

// console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 

// TODO when the page loads, select an element at random from the countriesAndCodes array
let countryCode = []
let randomCountryName = []

onload = update() // calls update function on the load of the page to randomly select a country

function update() {
    let randomCountry = countriesAndCodes[Math.floor(Math.random()*countriesAndCodes.length)]  // selects the random country array from countries.js
    let randomCountryDisplay = randomCountry.name  // identifies if the country name in the randomly selected country array
// TODO display the country's name in the randomCountryElement     
    randomCountryElement.innerHTML = randomCountryDisplay  // displays the 
    countryCode.push(randomCountry['alpha-2'])  // push the two-digit country code to countryCode array for later use
    randomCountryName.push(randomCountry['name'])  // push the country name to randomCountryName array for later use
    console.log(countryCode)  // validate code was added to array, remove this line for game
    console.log(randomCountryName)  // validate country name was added to array, remove this line for game
}

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

submitButton.addEventListener('click', function() {  // upon clicking the submit button...
    let userAnswer = userAnswerElement.value  // store the users answer
    let url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`  // set the worldbank api url with countryCode saved to array 
    fetch(url)  // call the url
        .then( response => response.json() ) //function 'response' returns 'response.json'
        .then( actualCapital => {         
            let actualCapitalCity = actualCapital[1][0]['capitalCity']  // store the capital name from the api - indentify captial by following correct index pathway
            console.log(actualCapitalCity)  // just proving that a capital is found, remove this line for game
            // trim user answer and validate length is not 0  --  this isn't working... the next two if statements are though...
            if (userAnswer.trim().length == 0) {  
                resultTextElement.innterHTML = `You must enter a guess.`
            }
            // trim and convert user answer to lowercase, then compare to captial city extracted from api (also converted to lowercase) for non-match
            else if (userAnswer.trim().toLowerCase() != actualCapitalCity.toLowerCase()) {  
                resultTextElement.innerHTML = `Incorrect. The capital city of ${randomCountryName} is not ${userAnswer}, it is ${actualCapitalCity}.`
            }
            
            // trim and convert user answer to lowercase, then compare to captial city extracted from api (also converted to lowercase) for match
            else (userAnswer.trim().toLowerCase() == actualCapitalCity.toLowerCase()) {  
                resultTextElement.innerHTML = `Correct! The capital city of ${randomCountryName} is ${actualCapitalCity}.`
            }
        })
        .catch( error => {  // handle the rejected promise, log to console
            console.log('error', error)
        })
    }
)

// upon clicking the try again button, clears all innter.HTML fields and arrays and runs the update function to retreive a new country
tryAgainButton.addEventListener('click', function() {  
    userAnswerElement.value = ''
    countryCode = []
    randomCountryName = []
    update()
    resultTextElement.innerHTML = 'Can you guess correctly?'
})


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice.
