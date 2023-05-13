function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right = right - 1;
  }
  
  return null;
}

console.log(pairSum([1, 2, 3, 4, 6], 6)) 
console.log(pairSum([2, 5, 9, 11], 11))  
console.log(pairSum([1, 3, 5, 7], 12))  
console.log(pairSum([1, 4, 6, 8], 10))   
console.log(pairSum([1, 5, 6, 7], 6))    