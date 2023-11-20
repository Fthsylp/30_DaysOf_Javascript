
// Primative Data Types - Includes Numbers, Strings, Booleans, Null, Undefined, Symbol

let word = "Javascript"
word[0] = "y"

console.log(word); // Printed Javascript. We cant modify primative data types.

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // but they are comperativable

// Non-Primitive Data Types - Includes Objects and Arrays


let nums = [1,2,3]
nums[0] = 10
console.log(nums) // Non-Primitive Data Types are mutable.


let numss = [1, 2, 3]
let numbers123 = [1, 2, 3]

console.log(numss == numbers123)  // false

let userOne1 = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}

let userTwo2 = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}

console.log(userOne1 == userTwo2) // false -- Non-primitive data types cannot be compared by value. Even if two non-primitive data types have same properties and values, they are not stricly equal.



let numsRepeat = [1, 2, 3]
let numbers = numsRepeat

console.log(numsRepeat == numbers)  // true

let userOne = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true --  We do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.


//Numbers
let age = 35
const gravity = 9.81  // we use const for non-changing values
let mass = 72        
const PI2 = 3.14       
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI2, boilingPoint, bodyTemp)

//Math Object - Provides a lots of method to work with numbers.

const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value


const randomNumber = Math.random() // creates random number between 0 to 0.999999
const randNumber = Math.round(randomNumber*11) //creates random number between 0 and 10
// console.log(randNumber)

for(let i = 0; i<100; i++) // Let's see numbers
{
    const randomNumber = Math.random()
    const randNumber = Math.round(randomNumber*11) 
    console.log(randNumber)
}



//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046
console.log(Math.LNE)           // undefined

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)


// Strings

let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

console.log(space, firstName, lastName,country,city)



const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph) // Long Literal Strings

// Escape Sequences in Strings
//  followed by some characters is an escape sequence. Let's see the most common escape characters:
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")



const name2 = "Rıfat \n Karlıova"
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


// Template Literals - 
let nameNew = "Fatih"
let ageNew = 26
let successRate = 0

console.log(`Hello my name is ${nameNew}. I am ${ageNew} years old and my success rate is ${successRate}. Which means I've failled a lot.`)

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)


//Strings

let name = "fatih"
console.log(name.length)


let stringJ = 'JavaScript'
let firstLetter = stringJ[0]

console.log(firstLetter)           // J

let secondLetter = stringJ[1]       // a
let thirdLetter = stringJ[2]
let lastLetter = stringJ[9]

console.log(lastLetter)            // t

let lastIndex = stringJ.length - 1

console.log(lastIndex)  // 9
console.log(stringJ[lastIndex])    // t


let stringJ2 = 'JavaScript'
console.log(stringJ2.toUpperCase())     // JAVASCRIPT
console.log(stringJ2.toLowerCase())     // javascript



let newStringg = "Javascript"
console.log(newStringg.substr(3,5)) // The starting index and number of characters to slice.


let newString2 = "Javascript"
console.log(newString2.substring(1,7)) // the starting index and the stopping index but it doesn't include the character at the stopping index.


let newStrr = "30 days of javascript"
console.log(newStrr.split()) //String changes to an array
console.log(newStrr.split(' ')) //Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let strrr = '   30 Days Of JavaScript   '
console.log(strrr)
console.log(strrr.trim(' ')) // Removes spaces from beginning and end of the string



let newStr30 = '30 Days Of JavaScript'

console.log(newStr30.includes('Days'))     // true
console.log(newStr30.includes('days'))     // false - it is case sensitive!
console.log(newStr30.includes('Day'))      // true



let repStr = '30 Days Of JavaScript'
console.log(repStr.replace('JavaScript', 'Python')) // 30 Days Of Python
console.log(repStr.replace('Java', 'Python')) // 30 Days Of PythonScript




let sttttr = "30 Days of JAvascript"
console.log(sttttr.charAt(3))
console.log(sttttr.length-1) // Last index
console.log(sttttr.charAt(sttttr.length-1)) // Last index


let charisma = "I am so charismatic"
console.log(charisma.indexOf("charismatic")) //Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(charisma.indexOf("String")) //=> -1



let countryy = "Türkiye"
console.log(countryy.concat(" Cumhuriyeti"))

let love = 'Love is the best to in this world'

console.log(love.startsWith('Love'))   // true
console.log(love.startsWith('love'))   // false



let love2 = 'Love is the best to in this world'

console.log(love2.endsWith('world'))         // true
console.log(love2.endsWith('love'))          // false




let love3 = 'Love is the best to in this world'

console.log(love3.endsWith('world'))         // true
console.log(love3.endsWith('love'))          // false


let whatToLove = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(whatToLove.search('love'))          // 2
console.log(whatToLove.search("javascript"))  // 7



let firstNameF = "Fatih"
console.log(typeof firstNameF) // Returns string
let numNumber = 34
console.log(typeof numNumber) // Returns number
let numNumber2 = "34"
console.log(typeof numNumber2) // Returns string
let numNumber3 = Number(numNumber2)
console.log(typeof numNumber3) // Returns number
let numNumber4 = '9.81'
let numFloat = parseFloat(numNumber4)
console.log(numFloat) // 9.81

