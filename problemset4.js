// 1.

function NumberAddition(str) {
    str = str.split(/[a-zA-Z]/);
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] != "") {
            sum += parseInt(str[i]);
        }
    }

    return sum;
}


// 2.
var longestWord = function(array) {
  var elements = array.length;
  var count = 0;
  for (i = 0; i < elements; i++) {
    if (array[i].length > count)
      count = array[i].length;
  }
  return count;
};


// 3.
var myStr = "Hello6 9World 2, Nic8e D7ay!";

function averageStringNumbers(str) {
	var numTotal = 0;
	var letters = 0;

	for(var i = 0; i < str.length; i++) {
		// numbers
		if(48 <= str.charCodeAt(i) && str.charCodeAt(i) <= 57) {
			numTotal += parseInt(str[i]);
		}

		//uppercase letters
		if(65 <= str.toUpperCase().charCodeAt(i) && str.toUpperCase().charCodeAt(i) <= 90) {
			letters++;
		}
	}

	var average = numTotal / letters;

	return Math.round(average);
}

var result = averageStringNumbers(myStr);

console.log(result);
