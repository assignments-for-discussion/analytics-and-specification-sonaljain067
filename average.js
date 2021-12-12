
function average(numbers) {
  var reduced=numbers.map(function(obj) {return obj;})
                      .reduce((p, c)=> p + c, 0)/ numbers.length;
  //return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
return reduced;
}

module.exports = {average};
