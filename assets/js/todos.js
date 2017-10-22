$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});
$("input:text").keypress(function(event){
	if(event.which === 13){
		var toToText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toToText + "</li>");


	}
});
$(".fa-plus").click(function(){
	$("input:text").fadeToggle();
});