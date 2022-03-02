// Problem Kth maxium and minimum character from the array
// Step 1:- delete duplicates
// Step 2:- Sort Array
// Step 3:- Find Kth Maximum
const kthMaximumMinmum = (arr, number) => {
  let uniqueArray = [];

  for (let char of arr) {
    if (!uniqueArray.includes(char)) {
      uniqueArray.push(char);
    }
  }
  const sortedArray = uniqueArray.sort((a, b) => a - b);

  console.log("Kth Maximum is", sortedArray[uniqueArray.length - number]);
  console.log("Kth Minimum is", sortedArray[number-1]);
};

const array = [1, 2, 4, 3, 1, 1, 2, 3, 4];
kthMaximumMinmum(array, 1);
