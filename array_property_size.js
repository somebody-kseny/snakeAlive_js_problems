// https://rubaxa.github.io/playground/#array.size

// Реализоватьсвойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.

Object.defineProperty(Array.prototype, 'size', {
    get() {
      return this.length;
    },
    set(value) {
      this.length = value;
    }
  });
  
  
// #1
console.log([0, 1].size); // 2
  
// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
