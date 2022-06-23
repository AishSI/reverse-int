module.exports = function reverse(n) {
   let s = Math.abs(n) + '';
   return [...s].reverse().join('');
   // return n < 0 ? [...s].reverse().join('') * -1 : [...s].reverse().join('');
}
