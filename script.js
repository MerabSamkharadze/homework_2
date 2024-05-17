"use strict";

// დავალება 1

for (i = 5; i < 100; i++) {
  console.log(i);
}

// დავალება 2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (item of array1) {
  if (item > 0 && item < 10) {
    console.log(item);
  }
}

// დავალება 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (item of array2) {
  if (item == 5) {
    console.log("არის!");
    break;
  }
}

// დავალება 4

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (item of array3) {
  sum += item;
}
console.log(sum);

// დავალება 5

let array4 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (item of array4) {
  sum2 += item;
}
let average = sum2 / array4.length;
console.log(average);

// დავალება 6

let array5 = [1, 2, 3, 7, 6, 9];

for (item of array5) {
  if (item == 7) {
    continue;
  }
  console.log(item);
}

// დავალება 7

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

// console.log(user['studentstatus'])
console.log(user.studentstatus);

// დავალება 8

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

// if (user2.age < 18 && user2.studentstatus == "active") {
//   console.log("hello user");
// } else if (user2.name == "levani") {
//   console.log("hello levani");
// } else if (user2.studentstatus == "active" || user2.age < 25) {
//   console.log("hello anna");
// } else {
//   console.log("error");
// }

user2.age < 18 && user2.studentstatus == "active"
  ? console.log("hello user")
  : user2.name == "levani"
  ? console.log("hello levani")
  : user2.studentstatus == "active" || user2.age < 25
  ? console.log("hello anna")
  : console.log("error");

// დავალება 9

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (item of array6) {
  if (item % 2 == 0) {
    console.log(item);
  }
}

// დავალება 10

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (item of users) {
  if (item.status == true) {
    console.log(item);
  }
}
