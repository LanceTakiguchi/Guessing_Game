/**
 * aINumGen
 * @param  {[Int]} A integer that is the start of the range, inclusive
 * @param  {[Int]} A integer that is the end of the range, inclusive
 * @return {[Int]} A random number between the start and finish
 */
var aINumGen = function(start, end){
	return Math.floor((end - start + 1) * Math.random()) + start;
}
/**
 * isSame
 * @param  {[Int]} User inputed integer that is their guess
 * @param  {[Int]} AI generated integer
 * @return {Boolean} Determines if the two numbers where the same
 */
var isSame = function(num1, num2){
	return num1 === num2;
}
$(document).ready(function() {
	$(".submitPick").click(function(){
		var userGuess = parseInt($(".userGuess").val());
		var aIPick = aINumGen(1,10);
		var result = isSame(userGuess, aIPick);
		console.log(result);

		$(".youGuess").text(userGuess);
		$(".computerGuess").text(aIPick);
		if(result){
			$(".winOrLose").text("WIN");
		}else{
			$(".winOrLose").text("LOSE");
		}
	});
});