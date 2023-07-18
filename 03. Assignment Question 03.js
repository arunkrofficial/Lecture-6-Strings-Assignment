function validMountainArray(arr) {
    const n = arr.length;
    if (n < 3) {
      return false;
    }
  
    let i = 0;
  
    while (i + 1 < n && arr[i] < arr[i + 1]) {
      i++;
    }
  
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    while (i + 1 < n && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
  // Example usage:
  const arr = [2, 1];
  const isValidMountain = validMountainArray(arr);
  console.log(isValidMountain);
  