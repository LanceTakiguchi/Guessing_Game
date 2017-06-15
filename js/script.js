var aINumGen = function(start, end){
	return Math.floor((end - start + 1) * Math.random()) + start;
}
var isSame = function(num1, num2){
	return num1 === num2;
}
$(document).ready(function() {
	$(".submitPick").click(function(){
		var userGuess = parseInt($(".userGuess").val());
		var aIPick = aINumGen(1,10);
		var result = isSame(userGuess, aIPick);
		console.log(result);
	});
});