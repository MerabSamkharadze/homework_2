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
