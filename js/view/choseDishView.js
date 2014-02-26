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
    $("#dishImage").attr("src", "images/" + dish.image);
    this.TotPrice.html(model.getPriceOfDish(dish)*model.getNumberOfGuests());
    this.preparations.html(dish.description);
    var text = "Ingridients for " + model.getNumberOfGuests() + " persons";
    this.ingridientsForNumberOfPersons.html(text);
    
    var tbdy=document.createElement('tbody');
    var ingridients = dish.ingredients;
    for(var key in ingridients){
        var iName = ingridients[key].name;
        var iQuantity = ingridients[key].quantity*model.getNumberOfGuests();
        var iUnit = ingridients[key].unit;
        var iPrice = ingridients[key].price*model.getNumberOfGuests();

        var tr=document.createElement('tr');
        var td=document.createElement('td');
        td.appendChild(document.createTextNode(iName));
        tr.appendChild(td);

        var td=document.createElement('td');
        td.appendChild(document.createTextNode(iQuantity));
        tr.appendChild(td);

        var td=document.createElement('td');
        td.appendChild(document.createTextNode(iUnit));
        tr.appendChild(td);

        var td=document.createElement('td');
        td.appendChild(document.createTextNode(iPrice));
        tr.appendChild(td);

        tbdy.appendChild(tr)
    }
    
    this.ingridientsList.html(tbdy);

    /*****************************************  
          Observer implementation    
          *****************************************/

    //Register an observer to the model
    model.addObserver(this);
    
    //This function gets called when there is a change at the model
    this.update = function(arg){
        var text = "Ingridients for " + model.getNumberOfGuests() + " persons";
        this.ingridientsForNumberOfPersons.html(text);
        this.TotPrice.html(model.getPriceOfDish(dish)*model.getNumberOfGuests());
        var tbdy=document.createElement('tbody');
        var ingridients = dish.ingredients;
        for(var key in ingridients){
            var iName = ingridients[key].name;
            var iQuantity = ingridients[key].quantity*model.getNumberOfGuests();
            var iUnit = ingridients[key].unit;
            var iPrice = ingridients[key].price*model.getNumberOfGuests();

            var tr=document.createElement('tr');
            var td=document.createElement('td');
            td.appendChild(document.createTextNode(iName));
            tr.appendChild(td);

            var td=document.createElement('td');
            td.appendChild(document.createTextNode(iQuantity));
            tr.appendChild(td);

            var td=document.createElement('td');
            td.appendChild(document.createTextNode(iUnit));
            tr.appendChild(td);

            var td=document.createElement('td');
            td.appendChild(document.createTextNode(iPrice));
            tr.appendChild(td);

            tbdy.appendChild(tr)
        }

        this.ingridientsList.html(tbdy);
    }
}