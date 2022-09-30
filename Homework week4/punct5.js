// compute how many times a certain element appears in an array
var arr = [4, 24, 10, 5, 13, 4, 16, 51, 16, 15, 16, 17, 16, 16];
var myNumber = 16;
var count = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === myNumber) {
    count = count + 1;
  }
}
console.log(count);
