const array = [0, 1];
function fib(n) {
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}
// console.log(fib(8));

function fibRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let seq = fibRec(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}

console.log(fibRec(8));
