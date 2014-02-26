$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
   	var exampleViewController = new ExampleViewController(exampleView,model);
   	var overviewView = new OverviewView($("#overview_div"),model);
   	var overviewViewController = new OverviewViewController(overviewView,model);
});

function goToMain(){
	document.getElementById("leftMenu").style.display = 'block';
	document.getElementById("searchframe").style.display = 'block';
	document.getElementById("smallmainframe").style.display = 'none';
}

function goToConfirmation() {
	document.getElementById("overview_div").style.display = 'block';
	document.getElementById("searchframe").style.display = 'none';
	document.getElementById("leftMenu").style.display = 'none';
}

function goToEdit() {
	document.getElementById("overview_div").style.display = 'none';
	document.getElementById("searchframe").style.display = 'block';
	document.getElementById("leftMenu").style.display = 'block';
}

function goToSHowFullRecipe() {

}