//ExampleViewController Object constructor
var OverviewViewController = function(view, model ) {
	
	view.goBackAndEditButton.click(function(){
		goToEdit();
	});
}