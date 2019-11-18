//adding line through
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed")
});	

// adding the delete function
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
event.stopPropagation();
});

//adding new todos from the input 
$("input[type='text'").keypress(function(event){
	if (event.which === 13) {
	var inputContent = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'> </i></span> " + inputContent + "</li>");
	}
});

//Making the plus button work
$(".fa-plus").click(function(){
	$("input[type='text'").toggle();
});