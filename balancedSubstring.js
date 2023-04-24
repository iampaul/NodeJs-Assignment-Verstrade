const isBalanced = (str) => {
  if (str.length < 2 || new Set(str).size !== 2) {
    return false;
  }
  const freq = [...str].reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});
  const counts = Object.values(freq);
  return counts[0] === counts[1];
};

const getBalancedSubstrings = (S) => {
  const result = [];
  let maxLength = 0;
  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      const substr = S.substring(i, j);
      if (isBalanced(substr) && substr.length >= maxLength) {
        if (substr.length > maxLength) {
          result
          maxLength = substr.length;
        }
        result.push(substr);
      }
    }
  }
  return result;
};

console.log(getBalancedSubstrings('cabbacc')); // ['abba']
console.log(getBalancedSubstrings('abababa')); // ['ababab', 'bababa']
