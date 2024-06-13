function generateFizzBuzz() {
    var start = parseInt(document.getElementById('start').value);
    var end = parseInt(document.getElementById('end').value);
    var output = document.getElementById('output');
    output.innerHTML = '';
  
    for (var i = start; i <= end; i++) {
      var result = '';
      if (i % 2 === 0) {
        result += i + ' Buzz';
        output.innerHTML += '<p class="buzz">' + result + '</p>';
      } else if (i % 5 === 0 && i % 2 !== 0) {
        result += i + ' FizzBuzz';
        output.innerHTML += '<p class="fizzbuzz">' + result + '</p>';
      } else {
        result += i + ' Fizz';
        output.innerHTML += '<p class="fizz">' + result + '</p>';
      }
    }
  }