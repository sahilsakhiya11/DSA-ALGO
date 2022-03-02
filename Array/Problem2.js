// Problem:- Find Max and minimum element in array

const minimumMaximum = (arr) => {
  // Step 1:- Convert into String

  const stringInp = arr.join("");
  
  // Step 2:- Convert String into object with count of each character

  let obj = {}
  let count = 0

  for(let char of stringInp){
      obj[char] = (!obj[char]) ? count = 1 : count = count + 1
  }
  
  // Step 3:- Find Maximum
  let max = 0;
  let maxChar = "";

  for(let char in obj){
      if(obj[char] > 0){
          max = obj[char]
          maxChar = char
      }
  }
  console.log("Maximum Character is", maxChar, "with", max ,"times")

  // Find the Minimum

  let min = Infinity
  let minChar =""

  for(let char in obj){
      if(obj[char] < min){
          min = obj[char]
          minChar = char
      }
  }
  console.log("Minimum Character is", minChar, "with", min ,"times")
};

const array = ["s","s", "a","h", "h", "s"];
minimumMaximum(array);
