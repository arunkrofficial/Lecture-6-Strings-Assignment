function findMaxLength(nums) {
    const balance = new Map();
    balance.set(0, -1); // Initialize with 0 balance at index -1
    let maxLen = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 1 ? 1 : -1;
  
      if (balance.has(count)) {
        maxLen = Math.max(maxLen, i - balance.get(count));
      } else {
        balance.set(count, i);
      }
    }
  
    return maxLen;
  }
  
  // Example usage:
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);
  