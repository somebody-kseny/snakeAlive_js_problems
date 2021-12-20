// https://rubaxa.github.io/playground/#romannumbers

// Реализовать создание следующую запись ;]
// ...

console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];

const romanNums_firstPart = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
const romanNums_secondPart = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

firstPartCounter = 0;

romanNums_firstPart.forEach(first => {
    
    secondPartCounter = 1;
    
    romanNums_secondPart.forEach(second => {
    
        Object.defineProperty(Number.prototype, first + second, {
          writable: false,
          value: (() => {
                res = "0"
                let i = 1;
                while (i < firstPartCounter + secondPartCounter) { // выводит 0, затем 1, затем 2
                    res += ", " + i;
                    i++;
                }
              return res;
          })()
        });
        
        secondPartCounter += 1;
            
    });
    
    firstPartCounter += 10;
});

console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];