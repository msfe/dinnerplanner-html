$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
   	var exampleViewController = new ExampleViewController(exampleView,model);
});

function goToMain(){
	document.getElementById("leftMenu").style.display = 'block';
	document.getElementById("smallmainframe").style.display = 'none';
}