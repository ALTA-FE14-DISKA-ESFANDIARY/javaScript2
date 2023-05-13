function findMaxSumSubArray(k, arr) {
    let currentSum = 0;
    let maxSum = 0;
  
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
  
    maxSum = currentSum;
    for (let i = k; i < arr.length; i++) {
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