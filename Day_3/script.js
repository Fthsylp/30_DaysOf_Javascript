// Day 3

const date = new Date();
console.log(date.getFullYear())

let isRaining = true;
isRaining ? console.log("Yeah we love rainny weathers.") : console.log("Shit, here we go again")





const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(arr)

const newKey = 'HokusPokus'
console.log(newKey.split(''))

const fruits = ['banana','yogurt','orange','pinapple']
console.log(fruits[2])
const indexNumber = fruits.length
console.log(indexNumber)
const lastIndex = fruits.length -1
console.log(fruits[lastIndex])

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
countries[2] = "Turkiye"

console.log(countries)

let arr2 = Array(12)
arr2 = Array(12).fill('hello my friend')
console.log(arr2)

const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

const colors = ['orange','pink','gray','black','dark','brown']
console.log(colors.indexOf('black'))
console.log(colors.indexOf('brown'))
indexOfColor = colors.indexOf('pink')
indexOfColor == -1 ? console.log('There is not such color') : console.log('Yeah, I love it')


const lowNumbers = [1, 2, 3, 4, 5]
console.log(lowNumbers.includes(5)) // true
console.log(Array.isArray(lowNumbers)) // true

const names = ['Fatih','Samet','Soyalp','Yu']
console.log(names)
console.log(names.toString())
console.log(names.join('$'))
console.log(names.join('#'))
console.log(names.join(''))
const newKindOfNUmbers = [77,66,44,33,22,0]
console.log(newKindOfNUmbers.slice())
console.log(newKindOfNUmbers.slice(0))
console.log(newKindOfNUmbers.slice(1,3))
console.log(newKindOfNUmbers.slice(0,newKindOfNUmbers.length - 1))
console.log(newKindOfNUmbers.slice(0,newKindOfNUmbers.length))
// ---------------------------------------------------------
console.log(newKindOfNUmbers.splice(0,3)) // returns deleted numbers
console.log(newKindOfNUmbers) // only 33 , 22, 0 left behind
// ---------------------------------------------------------
newKindOfNUmbers.push(88,99,101)
console.log(newKindOfNUmbers)
// ---------------------------------------------------------
console.log(newKindOfNUmbers.reverse())
console.log(newKindOfNUmbers.sort())


const frondEnd = ['HTML','CSS','JS','REACT','REDUX']
const backEnd = ['Node','Express','MongoDB']
const fullStack = [frondEnd,backEnd]
console.log(fullStack)