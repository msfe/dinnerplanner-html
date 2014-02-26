//ExampleView Object constructor
var OverviewView = function (container,model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    // HÄR FÅR MARTIN KODA
    this.goBackAndEditButton = container.find("#go_back_and_edit_button");
    this.printFullRecipeButton = container.find("#printFullRecipeButton");

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
    var tr=document.createElement('tr');
    var th=document.createElement('th');
    th.appendChild(document.createTextNode("Dish"));
    tr.appendChild(th);
    var th=document.createElement('th');
    th.appendChild(document.createTextNode("Cost"));
    tr.appendChild(th);
    tbdy.appendChild(tr);


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
    
    
    /*****************************************  
          Observer implementation    
          *****************************************/

    //Register an observer to the model
    model.addObserver(this);
    
    //This function gets called when there is a change at the model
    this.update = function(arg){
        
    }
}


