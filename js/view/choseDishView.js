//ExampleView Object constructor
var ChooseDishView = function (container,model, dish) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.dishName = container.find("#dishName");
    this.dishImage = container.find("#dishImage");
    this.backToSelectDish = container.find("#backToSelectDish");
    this.ingridientsForNumberOfPersons = container.find("#ingridientsForNumberOfPersons");
    this.ingridientsList = container.find("#ingridientsList");
    this.ConfirmButton = container.find("#ConfirmButton");
    this.TotPrice = container.find("#TotPrice");
    this.preparations = container.find("#preparations"); 
    
    //Set the inital values of the components
    this.dishName.html(dish.name);
    var src = dish.image;
    alert("images/" + src);
    this.dishImage.src = "images/" + src;
    alert(this.dishImage.src);
    this.TotPrice.html(model.getPriceOfDish(dish));
    this.preparations.html(dish.description);
    
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


