//compute the sum of the elements of an array and display it in the console

var myArray = [4, 27, 10, 16, 30, 20, 9];
var arraySum = 0;

for (var i = 0; i < myArray.length; i++) {
  arraySum = arraySum + myArray[i];
}
console.log(arraySum);
