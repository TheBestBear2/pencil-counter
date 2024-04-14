// document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// 1. creat a variable, myAge, and set its value to your age

// let myAge = 26
// 2. log the myAge variablee ro the console

// console.log(myAge)

// to // multiple things use ctrl+k+c

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// 1. creat two variables, myAge and humanDogRatio
// 2. multiply the two together and store the result in myDogAage
// 3. log myDogAge to the console

// let myAge = 26

// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let count = 5

// // count + 1
// count = count + 2 // 5 + 1


// console.log(count)

//creat a variable, bounsPoints, Initialize it as 50. increase it to 100.
// decrease it down to 25, and then finally increase it to 70
//console.log the value after each step

// let bounsPoints = 50

// console.log(bounsPoints)

// bounsPoints = bounsPoints + 50

// console.log(bounsPoints)

// bounsPoints = bounsPoints - 75

// console.log(bounsPoints)

// bounsPoints = bounsPoints + 45

// console.log(bounsPoints)

// intialize the count as 0 
// listen for clicks on the increment button
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count

// function increment(){
//     console.log("The button was clicked")
// }

// setting up the race

// function countdown(){
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// }

 // setting up the race
// countdown()

 // GO!
 // players are running the race
 // race is finished!

 // get ready for a new race
// countdown()

// create a function (you decide the name) that logs out the number 42 to the console
// call/invoke the function

// function myCount(){
//     console.log(42); 
// }

// myCount();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // creat a function that logs out the sum of all the lap times

// function logLapTime(){
//     //let logLapTime = lap1 + lap2 + lap3
//     // console.log(logLapTime)
//     // or coud have done 
//     console.log(lap1 + lap2 + lap3)
// }

// logLapTime()

// let lapsCompleted = 0

// // create a function that increments the lapsCompleted varable with one
// // runit three times
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
    

// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// document.getElementById("count").innerHTML = 5

// let count = 5
// count = count + 1
// console.log(count)

// inialize the count as 0 
// listen for clicks on the increment button
// increment the count variable when the button is clicked 
// change the count-element in the HTML to reflect  the new count


// document.getElementById("count-el").innerText = 5
// change the count-element in the HTML to reflect  the new count

// calmelCase 
// let countEl = document.getElementById("count-el") // pass in arguments

// console.log(countEl)

// let count = 0 
// function increment (){
//     count = count + 1
//     countEl.innerText = count
// }


// grab the count-el element, store it in a countEl variabile
// let count = 0

// function increment(){
//     count = count + 1
//    //set countEl's innerText to the count
// }

// let countEl = document.getElementById("count-el")
// let count = 0
// function increment(){
//     count = count + 1
//     countEl.innerText = count
// }
// // 1. creat a function, save(), which logs out the count when its called 
// function save(){
//     console.log(count)
// }


// let username = "per"
// let message = "you have three new notifications "

// let messageToUser = message + "," + username + "!"
// console.log(messageToUser)

// let name = "john"
// let greeting = "Hi, my name is " // to space out the top varable make a space at the end of this string
// let myGreeting = greeting + name
// console.log(myGreeting)

// let name = 42
// let greeting = "Hi, my name is " 
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bounsPoints = "10"

// let totalPoints = points + bounsPoints  

// console.log(totalPoints)

// grab the welcome-el paragraph and store it in  a variable called welcomEl
// let welcomEl = document.getElementById('welcome-el');

// // create two varablils (name & greeting) that contains your name
// // and the greeting we want to render on the page 
// let name = "john"
// let greeting = "welcome back "
// // render the welcome message  using erlcomeEl.innerText
// welcomEl.innerText = greeting + name 

// let welcomEl = document.getElementById('welcome-el');
// let name = "john"
// let greeting = "welcome back "
// welcomEl.innerText = greeting + name 

// welcomEl.innerText = welcomEl.innerText + " 🙌" // get emojis by pressing win + ; 

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment(){
//     // change this to use the plus equal technique you've learned
//     count += 1
//     countEl.innerText = count
// }
// function save(){
//     console.log(count)
// }

// 1. grab the save-el paragrah and store it in a  variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0 
// let saveEl = document.getElementById("save-el")
// function increment(){
//     count += 1
//     countEl.innerText = count
// }

// function save(){
//     // 2. create a varabil can name varabil anything that contains both the count and the dash separator, i.e. "12 - "
//     let countStr = count + " - "
//     // 3. render the variable in the saveEl using innerText
//     saveEl.innerText += countStr
//     // NB: makesure to not delete the existing content of the paragraph
//     console.log(count)
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr // change innerText to textContent
    countEl.textContent = 0
    count = 0
}
