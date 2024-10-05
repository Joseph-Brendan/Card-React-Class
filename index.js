// Using function declaration
// CREATE A FUNCTION THAT CALCULATES THE TOTAL PRICE OF TWO ITEMS

// Function declaration
function totalPrice(priceForItem1, priceForItem2){
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let firstTotalPrice = totalPrice(10, 20)
let secondTotalPrice = totalPrice(40, 40)
console.log(firstTotalPrice, secondTotalPrice)


// Function expression
const anotherTotalPrice = function(priceForItem1, priceForItem2){
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let newTotal = anotherTotalPrice(100, 100)
let anotherNewTotal = anotherTotalPrice(200,200)
console.log(newTotal, anotherNewTotal)


// Arrow function
const totalPrice3 = (priceForItem1, priceForItem2)=>{
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let test = totalPrice3(300, 300)
console.log(test)

const newArrow = fullName => fullName
let result = newArrow("Joseph")
console.log(result)



// Word Problem 1
const employee1 = {
    baseSalary : 50000,
    yearsOfService : 6
}
const employee2 = {
    baseSalary : 60000,
    yearsOfService : 4
}
const employee3 = {
    baseSalary : 45000,
    yearsOfService : 8
}

function calculateTotalPayment(baseSalary, yearsOfService){
    let bonusPercent
    if(yearsOfService >= 5){
        bonusPercent = 0.10
    }else{
        bonusPercent = 0.05
    }

    let bonus = baseSalary * bonusPercent
    let totalSalary = bonus + baseSalary

    return totalSalary
}

const firstEmployeeSalary = calculateTotalPayment(employee1.baseSalary, employee1.yearsOfService)

const secondEmployeeSalary = calculateTotalPayment(employee2.baseSalary, employee2.yearsOfService)

const thirdEmployeeSalary = calculateTotalPayment(employee3.baseSalary, employee3.yearsOfService)

const completeTotalSalary = firstEmployeeSalary + secondEmployeeSalary + thirdEmployeeSalary

console.log(`The total salary you will pay for the year including bonus is $${completeTotalSalary}`)




// Word Problem 2
function calorieCounter(walkingtime, runningtime, cyclingtime){
    const walkingCaloriesaMinute = 5
    const runningCaloriesaMinute = 10
    const cyclingCaloriesaMinute = 8

    const walkingCaloriesBurnt = walkingtime * walkingCaloriesaMinute
    const runningCaloriesBurnt = runningtime * runningCaloriesaMinute
    const cyclingCaloriesBurnt = cyclingtime * cyclingCaloriesaMinute;

    const totalCaloriesburnt = walkingCaloriesBurnt + runningCaloriesBurnt + cyclingCaloriesBurnt

    return totalCaloriesburnt
}

let resultOfCalories = calorieCounter(30, 15, 20)
console.log(`Your total calories burnt is ${resultOfCalories}`)




// Ice Cream Word Problem
function iceCreamOrder(customerName, ...flavorsOrdered){
    const oneScoopPrice = 500
    const iceCreamtotalPrice = oneScoopPrice * flavorsOrdered.length

    console.log(`A customer with the Name ${customerName} has placed an order with the following flavors ${flavorsOrdered}. The total amount for this order is ${iceCreamtotalPrice}`)
}

iceCreamOrder("Elizabeth", "vanilla")




// Object literals
const person = {
    name : "Ayomide",
    country : "Kenya",
    age : 120
}

//Dot notation
let personName = person.name
console.log(personName)

// Bracket notation
let country = person["country"]
console.log(country)

// Add and Update properties
person.occupation = "Software Engineer"
console.log(person)

person.country = "Nigeria"
console.log(person)

// Delete Properties from an Object
delete person.occupation
console.log(person)



// Methods in an object literal
const newPerson = {
    name : "Babatunde",
    country : "Nigeria",
    age : 23,
    typeOfCitizen : function(){
        if(this.age > 65){
            return "Senior Citizen"
        }else{
            return "Junior Citizen"
        }
    }
}
console.log(newPerson.typeOfCitizen())


//ES6 formats for writing object literals
const city = "Miami"
const myCountry = "America"

const cityData = {
    city,
    myCountry,
    name : "Joseph"
}
console.log(cityData)


// Computed property Name - ES6
const town = "nameOfTown"

const anotherCityData = {
    country : "America",
    [town] : "Brooklyn"
}
console.log(anotherCityData)
let nameOfT = anotherCityData.nameOfTown
console.log(nameOfT)


// Nested Object literal
const student = {
    name : "Ibinabo",
    age : 56,
    address : {
        city : "Lagos",
        street : "Down Below Mini Ochamba",
        country : "Nigeria"
    },
    studentLaptopDetail : {
        brand : "Macbook",
        size : "14 Inches",
        color : "Silver"
    }
}
console.log(`The student's name is ${student.name} and their country is ${student.address.country}`)


// Destructuring
const {age:personAge, name:personID, studentLaptopDetail} = student
console.log(personAge)
console.log(personID)
console.log(studentLaptopDetail)

const {brand} = studentLaptopDetail
console.log(brand)


// Create an object literal using an object constructor
const car = new Object()
car.brand = "Mercedes"
car.color = "Black"
car.year = 2013
console.log(car)