// Array Literal
const fruits = [
    "Oranges",
    "Bananas",
    "Peaches",
    "Pineapples"
]

// Access an item in an array
let storeFruit = fruits[1]
console.log(storeFruit);

// Modify an item in an array
fruits[1] = "Apples"
console.log(fruits)

// Length of an array - This is a property
let lengthResult = fruits.length
console.log(lengthResult)

// push method
fruits.push("Cashew")
console.log(fruits)

// Pop Method
fruits.pop()
console.log(fruits)

//Shift method
fruits.shift()
console.log(fruits)

// Unshift method
fruits.unshift("Oranges")
console.log(fruits)


// Iterating over an array
const countries = [
    "Kenya",
    "Canada",
    "Nigeria",
    "Ghana",
    "Cameron"
]

for(let x = 0; x < 5; x++){
    let arrayResult = countries[x]
    console.log(arrayResult)
}


// Array of objects
const studentRecords = [
    {
        studentName : "Andrew",
        studentID : 9684,
        studentCountry : "Kenya",
        score : 48
    },
    {
        studentName : "Anne",
        studentID : 454,
        studentCountry : "Canada",
        score : 64
    },
    {
        studentName : "Sophie",
        studentID : 9574,
        studentCountry : "Nigeria",
        score : 57
    }
]


// Filter method
const filterResult = studentRecords.filter( items => items.score >= 50)
console.log(filterResult)

// For Loop
for(let x = 0; x < studentRecords.length; x++){
    let report = studentRecords[x]
    console.log(report.studentName)
}

// For Each method
studentRecords.forEach((item)=>{
    console.log(item)
})

// Map Method
const numbers = [1,2,3,4]
const newNumbers = numbers.map((item)=>{
    return item * 10
})
console.log(newNumbers)

// Spread Operator
const firstArray = [1,2,3,4,5]
const secondArray = [6,7,8,9,10]
const newResultArray = [firstArray, secondArray]
console.log(newResultArray)


