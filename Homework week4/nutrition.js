//We’re at a nutrition center, and we have the data from our customers ( name, gender, height,
//weight). Write a JS script that prints in browser Console the following info for each user:
//John Doe | M | BMI: 24 | Normal Weight
//Mary Anne | F | BMI: 30 | Obese

var user1 = {
  name: "John Doe",
  gender: "M",
  height: 1.8,
  weight: 85,
};

var user2 = {
  name: "Mary Anne",
  gender: "F",
  height: 1.7,
  weight: 65,
};
var BMI = 0;

function calculateBMI(weight, height) {
  BMI = parseInt(weight / (height * height));

  if (BMI < 18.5) {
    return BMI + " | Underweight";
  } else {
    if (BMI >= 18.5 && BMI < 25) {
      return BMI + " | Normal weight";
    } else {
      if (BMI >= 25 && BMI < 30) {
        return BMI + " | Overweight";
      } else return BMI + " | Obese";
    }
  }
}

console.log(
  user1.name,
  " | ",
  user1.gender,
  " | ",
  "BMI: ",
  calculateBMI(user1.weight, user1.height)
);
console.log(
  user2.name,
  " | ",
  user2.gender,
  " | ",
  "BMI: ",
  calculateBMI(user2.weight, user2.height)
);

//● If your BMI is less than 18.5, it falls within the underweight range.
//● If your BMI is 18.5 to <25, it falls within the normal.
//● If your BMI is 25.0 to <30, it falls within the overweight range.
//● If your BMI is 30.0 or higher, it falls within the obese range.
