var aINumGen = function(start, end){
	return Math.floor((end - start + 1) * Math.random()) + start;
}
$(document).ready(function() {
	$(".submitPick").click(function(){
		var userGuess = $(".userGuess").val();
		var aIPick = aINumGen(1,10);
	});
});