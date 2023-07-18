function reconstructPermutation(s) {
    const perm = [];
    let start = 0;
    let end = s.length;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I') {
        perm.push(start);
        start++;
      } else if (s[i] === 'D') {
        perm.push(end);
        end--;
      }
    }
  
    perm.push(start);
  
    return perm;
  }
  

  const s = "IDID";
  const permutation = reconstructPermutation(s);
  console.log(permutation);
  