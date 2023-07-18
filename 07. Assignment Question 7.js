function generateMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(new Array(n).fill(0));
    }
  
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let num = 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      for (let col = startCol; col <= endCol; col++) {
        matrix[startRow][col] = num;
        num++;
      }
      startRow++;
  
      for (let row = startRow; row <= endRow; row++) {
        matrix[row][endCol] = num;
        num++;
      }
      endCol--;
  
      if (startRow <= endRow) {
        for (let col = endCol; col >= startCol; col--) {
          matrix[endRow][col] = num;
          num++;
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
        for (let row = endRow; row >= startRow; row--) {
          matrix[row][startCol] = num;
          num++;
        }
        startCol++;
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);
  