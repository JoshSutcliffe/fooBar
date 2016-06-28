var fooBar = function(num) {
  var sum = 0;
  for (var i = 0; i < num; i++) {
    if (i % 3 === 0) {
      sum+=i;
    } else if (i % 5 === 0) {
      sum+=i;
    }
  }
  console.log(sum);
}

fooBar(1000);
