//compute the maximum of the elements of an array and display it in the console
var arr = [4, 27, 10, 16, 30, 20, 9];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
