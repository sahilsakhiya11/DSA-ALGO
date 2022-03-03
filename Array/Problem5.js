// Problem => Move all the negative element on One side

const moveElements = (arr, left, right) => {
  while (left <= right) {
    if (arr[left] < 0 && arr[right] < 0) {
      left = left + 1;
    } else if (arr[left] > 0 && arr[right] < 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left = left + 1;
      right = right - 1;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right = right - 1;
    } else {
      left = left + 1;
      right = right - 1;
    }
  }
};

const displayArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
};
let array = [-12, 11, -13, -5, 6, -7, 5, -3, 11];
let size = array.length
moveElements(array, 0, size - 1);
displayArray(array, array.length);
