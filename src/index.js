module.exports = function towelSort (matrix) {
  let arr = [];
  if (arguments.length == 0) return arr;
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      arr = [...arr, ...matrix[i].reverse()];
    } 
    else {
      arr = [...arr, ...matrix[i]];
    }
  }
  return arr;
}
