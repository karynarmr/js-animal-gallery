// Add your code here

$(".filter-button").on("click", function(){
	console.log(this.id);
	var className = "." + this.id; 
console.log(className);
$(className).toggle();
//.toggleClass("active")


});

