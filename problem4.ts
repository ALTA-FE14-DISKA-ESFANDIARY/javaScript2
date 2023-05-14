function findMaxSumSubArray(k: number, arr: number[]): number {
  let currentSum: number = 0;
  let maxSum: number = 0;

  for (let i: number = 0; i < k; i++) {
    currentSum += arr[i];
  }

  maxSum = currentSum;
  for (let i: number = k; i < arr.length; i++) {
    currentSum += arr[i];
    currentSum -= arr[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); 
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); 
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); 
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); 
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]));