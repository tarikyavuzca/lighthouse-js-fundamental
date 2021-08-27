function range (start, end, step) {
  var arr = [];
    if( start === null || end === null || step === null || end < start || step < 0 ){
      arr = [];
    } else {
      for(var i = start; i <= end; i = i + step){
        arr.push(i);
      }
    }
    return arr;
  }
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));