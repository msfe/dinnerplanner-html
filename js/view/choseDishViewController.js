//ExampleViewController Object constructor
var ChooseDishViewController = function(view, model, dish ) {
	
	view.backToSelectDish.click(function(){
		goToEdit();
	});

	view.ConfirmButton.click(function(){
		model.addDishToMenu(dish.id);
		goToEdit();
	});
}