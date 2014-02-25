//ExampleView Object constructor
var ExampleView = function (container,model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
this.numberOfGuests = container.find("#numberOfGuests");
this.plusButton = container.find("#plusGuest");
this.minusButton = container.find("#minusGuest");
this.confirmDinner = container.find("#confirmDinner");

    //Creating the components dynamically. Here we create the following HTML content:
    //
    //<div class="row">
    //  Total menu price <span id="totalPrice"></span>
    //</div>
    //
    //and add it to the the exampleView 
    
    //div we just store in temporary variable because we won't need it later
    var div = $("<div>");
    //we set the constant text
    div.html("Total menu price ");
    //and we add the text-primary class to make it blue
    div.addClass("text-primary");

    
    //var body=document.getElementsByTagName('body')[0]; == div

    
    div.append(this.dishes);
    
    //total price we store in object variable (using this) so we can access it later
    this.totalPrice = $("<span>");
    //we set the id of the total price span
    this.totalPrice.attr("id","totalPrice");
    //we add total price span to the div
    div.append(this.totalPrice);
    
    var tbl=document.createElement('table');
    tbl.style.width='100%';
    tbl.setAttribute('border','4');
    var tbdy=document.createElement('tbody');
    var menu = model.getFullMenu();
    for(var key in menu){
        var dish = menu[key];

        var tr=document.createElement('tr');
        var td=document.createElement('td');
        td.appendChild(document.createTextNode(dish.name));
        tr.appendChild(td);

        var td=document.createElement('td');
        td.appendChild(document.createTextNode(model.getPriceOfDish(dish)));
        tr.appendChild(td);

        tbdy.appendChild(tr)
    }
    tbl.appendChild(tbdy);
    div.append(tbl);

    //finally we add the div to the view container
    container.append(div);
    
    //Set the inital values of the components
    this.numberOfGuests.html(model.getNumberOfGuests());
    this.totalPrice.html(model.getTotalMenuPrice());
    
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


