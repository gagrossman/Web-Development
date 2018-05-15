var $head = $('#header');
console.log($head)

var $li = $("li");
console.log("li");

var $p = $('p');
$p.hide();
$p.fadeIn(5000);

$("li").on("click", function() {
	this.hide().fadeIn(5000);
});

console.log(this);b

$('li').on("click", function() {
$(this).animate({
	fontSize: 32
	2000, function() {
		
	}
})

})