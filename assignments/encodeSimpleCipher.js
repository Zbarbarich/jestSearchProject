function encodeSimpleCipher(s) {
    let arr = s.split('');
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let j = (2 * i) % n;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  
    return arr.join('');
    }
    
  
  function decodeSimpleCipher(s) {
      let arr = s.split('');
      let n = arr.length;
    
      for (let i = n - 1; i >= 0; i--) {
        let j = (2 * i) % n;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } 
      
      return arr.join('');
    }


// const encodeSimpleCipher = s => {
//   const arr = [...s];
//   arr.forEach((_, i) => [arr[i], arr[(2 * i) % arr.length]] = [arr[(2 * i) % arr.length], arr[i]]);
//   return arr.join('');
// };

// function decodeSimpleCipher(s) {
//   return [...s].reduceRight((acc, _, i, arr) => {
//     [arr[i], arr[(2 * i) % arr.length]] = [arr[(2 * i) % arr.length], arr[i]];
//     return arr;
//   }, []).join('');
// }

console.log(decodeSimpleCipher('T  SAENG SR MGARJ  H U!SSTE TFECORIIEYSELUOOS'));
console.assert(decodeSimpleCipher('T  SAENG SR MGARJ  H U!SSTE TFECORIIEYSELUOOS') === 'THIS IS A LONGER SECRET MESSAGE JUST FOR YOU!');
