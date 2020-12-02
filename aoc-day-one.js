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
  }