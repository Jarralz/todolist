$("ul").on("click", "li", function(){
    /* Basic Logic 

    if($(this).css("color")==="rgb(128, 128, 128)"){
        //turn it black
        $(this).css({
            color:'black',
            textDecoration: "none" // camelCase in jQuery text-decoration
        });     
    } 
    else{
        $(this).css({
            color:'grey',
            textDecoration: "line-through" // camelCase in jQuery text-decoration
        });
    }
});
*/
// Short Code define a class and toggle it through jquery:
$(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
// grabing new text from input
var todoText = $(this).val();
// make it empty after Enter
$(this).val("");
// create a new li and add it to ul
$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});