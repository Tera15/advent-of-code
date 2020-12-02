
function twoSumProduct(array, target = 2020) {
    let cache = {};
    for (const num of array) {
      let y = target - +num 
      if (y in cache) {
        return +num * y
      } else {
        cache[+num] = true;
      }
    }
    return false;
  }
  

function threeSumProduct(array, target = 2020){
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      let start = i + 1, end = array.length - 1;
      while (start < end) {
        let potential = +array[i] + (+array[start]) + (+array[end]);
        if (potential === target) {
          return +array[i] * (+array[start]) * (+array[end])
        } else if (potential < target) {
          start++
        } else {
          end--
        }
      }
    }
    return false
  }