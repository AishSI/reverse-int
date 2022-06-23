module.exports = function reverse(n) {
   return [...Math.abs(n) + ''].reverse().join('');

   // если оставлять "отрицательность" числа:
   // let s = [...Math.abs(n) + ''].reverse().join('');
   // return n < 0 ? -s : s;
}
