//ExampleView Object constructor
var ChoseDishView = function (container,model, dish) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.dishName = contain.find("#dishName");
    this.dishImage = contain.find("#dishImage");
    this.backToSelectDish = contain.find("#backToSelectDish");
    this.ingridientsForNumberOfPersons = contain.find("#ingridientsForNumberOfPersons");
    this.ingridientsList = contain.find("#ingridientsList");
    this.ConfirmButton = container.find("#ConfirmButton");
    this.TotPrice = container.find("#TotPrice");
    this.preparations = container.find("#preparations"); 
    
    //Set the inital values of the components
    this.dishName.html(dish.name);
    this.dishImage.html(dish.image);
    
    /*****************************************  
          Observer implementation    
          *****************************************/

    //Register an observer to the model
    model.addObserver(this);
    
    //This function gets called when there is a change at the model
    this.update = function(arg){
        this.numberOfGuests.html(model.getNumberOfGuests());
        this.totalPrice.html(model.getTotalMenuPrice());
    }
}


