function colorClass(d) { 
  var className = quantile(d);

  if(typeof className != 'undefined' ) {

    return className;
  }
}

function maxValue(data) {
	var arr = objToArr(data),
		maxValue = d3.max(arr);

	return maxValue;
}

function setQuantile(data) {

	var arr = objToArr(data);

	var quantile = d3.scale.quantile()
	.domain(arr)
    .range(d3.range(9).map(function(i) { return "q" + i}) )

    return quantile;
}


function objToArr(obj) {
	var arr = [];

	Object.keys(obj).map(function(objectKey, index) {
	    var value = obj[objectKey];
	    arr.push(value);
	  });

	return arr;
}