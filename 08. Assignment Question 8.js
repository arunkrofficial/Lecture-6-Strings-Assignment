function multiply(mat1, mat2) {
    const m = mat1.length; // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1 and rows in mat2
    const n = mat2[0].length; // Number of columns in mat2
  
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let p = 0; p < k; p++) {
          result[i][j] += mat1[i][p] * mat2[p][j];
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  const result = multiply(mat1, mat2);
  console.log(result);
  