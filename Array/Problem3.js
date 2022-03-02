// Problem Kth maxium and minimum character from the array

const kthMaximumMinmum = (arr, number) => {
  // Step 1:-  delete duplicate from array;

  let uniqueArray = [];

  for (let char of arr) {
    if (!uniqueArray.includes(char)) {
      uniqueArray.push(char);
    }
  }

  // step 2:- Sort array

  const sortedArray = uniqueArray.sort((a, b) => a - b);
  console.log(sortedArray);

  // Step 3:- Find the Kth minimum
  const minimumKth = sortedArray[number - 1];
  console.log(minimumKth);

  // Step 4:- Find Kth maximum
  const maximumKth = sortedArray[sortedArray.length - number];
  console.log(maximumKth);
};

const array = [1, 2, 4, 3, 1, 1, 2, 3, 4];
kthMaximumMinmum(array, 1);
