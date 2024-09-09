let numbers = [1, 5, 3, 8, 2, 4,6,7,9,10 ,25 ,30 ];
 

//  sort the element of the array from smallest to largest
console.log("Sort the element of the array from smallest to largest");
console.log(numbers.sort((a, b) => a - b));

//2 
 console.log(" square of the numbers");
let square = numbers.map((num) => num * num);
console.log("Square of the numbers" + square);

//3 ofof
console.log("Filter the numbers greater than 25");
let filter = numbers.forEach((num) => num > 25);

console.log("Numbers greater than 25 are " + filter);
// 4
console.log("check if the array contains a number 3");
let check = numbers.includes(3);
console.log("Array contains number 3 : " + check);

//5
let filter1 = numbers.filter((num) => num % 2 === 0);
console.log("Filter the even numbers :" + filter1);

//6
console.log(" remve two middle elements from the array");
let remove = numbers.splice(3, 2);
console.log("Array after removing two middle elements " + numbers);

//7
console.log(" multiply all array elements");
let multiply = numbers.reduce((acc, num) => acc * num);
console.log("Multiplication of all array elements " + multiply);

//8
console.log("write the  index of numbers   5");
var index=numbers.findIndex(function(numbers) {
    return numbers > 5;
  });
  console.log( "the index : "+index);


//9
console.log("remove last element from the array");
let removeLast = numbers.pop();
console.log("Array after removing last element " + numbers);

//10
console.log(" push 10 to the array");
let push = numbers.push(10);
console.log("Array after pushing 10 " + numbers);
// ------------------
 
//q2 
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

//1
console.log(" return the emlement of array that contain the letter 'a'");
let contain = names.filter((name) => name.includes('a'));
console.log("Elements of array that contain the letter 'a' are " + contain);

//2
console.log("trun the arrray into a string");
let string = names.join();
console.log("Array as a string " + string);
// ------------------ 

// q3

let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];
console.log("  chseck if the array contain element start with 'b' ");
let start = fruits.map((fruit) => fruit.startsWith('b'));
console.log("Elements of array that start with 'b' are " + start);

console.log("  print new array after removing the the sceond element until the fifth element");
let remove1 = fruits.splice(2, 3);
console.log("Array after removing the second element until the fifth element " + fruits);
 console.log("  add yellow to the front of the array");
let add = fruits.unshift('yellow');
console.log("Array after adding yellow to the front " + fruits);

// ------------------
// q4
//1
let words = ['hello', 'world', 'javascript', 'array', 'function'];

console.log("Create a new array containing the length of each word in the original array");
let length = words.map((word) => word.length);
console.log("Length of each word in the original array " + length);
//2
console.log("Find the javascript element in the array. If it exists, print it, if it does not exist, print a message that it does not exist:");
if (words.includes('javascript')) {
    console.log("Element exists");
} else {
    console.log("Element does not exist");
}