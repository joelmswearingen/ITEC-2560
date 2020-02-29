console.log('Hello!')

// a few variables about me and the weather
let name = 'Joel'
let todayTemp = 27

console.log(name)
console.log(todayTemp)

//Create an interpolated string
console.log(`Hello world, my name is ${name}`)
console.log(`It is ${todayTemp}°F today.`)

function validGPA(gpa) {
    if (gpa <= 4 && gpa >= 0) {
        return true
    }

    return false
}

console.log(validGPA(5.4))
console.log(validGPA(1.2))

function nameCityState(city, state) {
    // state = state.toUpperCase()
    let address = `${city}, ${state.toUpperCase()}`  // you can add simple functions in the output
    return address
}

address = nameCityState('Minneapolis', 'mn', 55408)
console.log(address)


numOfLetters()  // make sure to call the fucking function!
function numOfLetters() {
    let name = 'Swearingen'
    let letters = name.length    
    if (letters > 5) {
        console.log(name + ' is longer than 5 characters') 
        console.log('There are ' + letters + ' characters in ' + name)
        }
    }

if (todaysTemp < 32)


//Create an array
let trees = ['Fir', 'Sequoia', 'Maple']
trees.sort()

// loop over the array to print every tree
trees.forEach( function(tree) {
    console.log(tree)
})

// Where are you in the array
trees.forEach( function(tree, index) {
    console.log(tree, index)
})

trees.push('Birch') // push will always add to the end of the array
console.log(trees[2])

let allTrees = trees.join(' **** ')
console.log(allTrees)

// \n gives you a new line

let text = 'kittens'
let indexOfZ = text.indexOf('z')
console.log(indexOfZ)