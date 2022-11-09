// Chapter 15
var bros = ['Asim', 'Babar', 'Saad']

alert("My Love ", bros[2])

var mixedArray = [1, "Bina", "Tommorow is", true];

// Chapter 16
var fruits = []
fruits[0] = 'Mango'
fruits[1] = 'Apple'
fruits[2] = 'Banana'
console.log(fruits)

fruits.push("Melon", "Grapes")
console.log(fruits)

fruits.pop()
console.log(fruits)

// Chapter 17
fruits.shift();
console.log(fruits)

fruits.unshift("jamun", "aloo bukhara");
console.log(fruits)

fruits.splice(2, 2, "Pome", "Kiwi", "Watermelon");
console.log(fruits)

fruits.splice(2, 2);
console.log(fruits)

var subFruits = fruits.slice(2, 4);
console.log(fruits, subFruits)

// Chapter 18
for (i = 0; i >= 5; i++) {
    console.log(i)
}

// Chapter 19
var fruit = prompt("What is your favorite fruit?")
var numElements = fruits.length;
var matchFound = false;
for (var i = 0; i < numElements; i++){
    if (fruit === fruits[i]) {
        matchFound = true;
        alert("It's on the list");
        break;
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}


// Chapter 20
for (i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        console.log("*")

    }
}