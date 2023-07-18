function findOriginalArray(changed) {
    const n = changed.length;
  
    if (n % 2 !== 0) {
      // If the length of changed is odd, it can't be a doubled array
      return [];
    }
  
    const frequencyMap = new Map();
    const original = [];
  
    for (let num of changed) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    changed.sort((a, b) => a - b);
  
    for (let num of changed) {
      if (frequencyMap.get(num) > 0) {
        frequencyMap.set(num, frequencyMap.get(num) - 1);
        if (frequencyMap.get(num * 2) > 0) {
          frequencyMap.set(num * 2, frequencyMap.get(num * 2) - 1);
          original.push(num);
        } else {
          return [];
        }
      }
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
  