// By Jonathan McCormick, Jr.
// 04 October, 2020

// Alert user to the large computational appetite of the program
alert("Are you 100% sure you are ready to see a million square roots?");

var operator = 'squareRoot';
var i = 0;
var msg = '';


// Calculate square roots
 var j = Math.sqrt(i);

if (operator === 'squareRoot') {
  while (i < 1000001) {
    msg += 'The square root of ' + i + ' = ' + j + '<br />';
    i++;
    var j = Math.sqrt(i);
  }
} else {
  while (i < 11) {
    msg += 'Hmmm... Something is not right.' + '<br />';
    i++;
  }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
