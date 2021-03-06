//ExampleView Object constructor
var OverviewView = function (container,model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    // HÄR FÅR MARTIN KODA
    this.goBackAndEditButton = container.find("#go_back_and_edit_button");
    this.printFullRecipeButton = container.find("#printFullRecipeButton");
    this.text = container.find("#overview_mydinner_text");

    //Creating the components dynamically. Here we create the following HTML content:
    //
    //<div class="row">
    //  Total menu price <span id="totalPrice"></span>
    //</div>
    //
    //and add it to the the exampleView 
    
    //div we just store in temporary variable because we won't need it later
    var div = document.getElementById("dishImagePart");
    //we set the constant text
    // div.innerHTML = "Total menu price";
    //and we add the text-primary class to make it blue
    div.setAttribute("class","text-primary");
    this.text.html("My Dinner: " + model.getNumberOfGuests() + " Persons");
    
    
    
    var tbl=document.createElement('table');
    // tbl.style.width='100%';
    tbl.setAttribute('border','0');
    
    var tbdy = fillTableOverview(model);

    tbl.appendChild(tbdy);
    div.appendChild(tbl);

    

    /*****************************************  
          Observer implementation    
          *****************************************/

    //Register an observer to the model
    model.addObserver(this);
    
    //This function gets called when there is a change at the model
    this.update = function(arg){
        this.text.html("My Dinner: " + model.getNumberOfGuests() + " Persons");
        var table = document.getElementById('menutable');
        var tbdyNew = fillTableOverview(model);
        tbl.replaceChild(tbdyNew,tbdy);
        tbdy = tbdyNew;

    }
}

function fillTableOverview(model){

    var tbdy=document.createElement('tbody');

    var menu = model.getFullMenu();
    var tr=document.createElement('tr');
    for(var key in menu){
        var dish = menu[key];
        var td=document.createElement('td');
        // td.appendChild(document.createTextNode(dish.name));
        createDishViews(td,dish,model.getPriceOfDish(dish) + " kr");
        tr.appendChild(td);        
    }
    var td = document.createElement("td");
    td.appendChild(document.createTextNode("Total Cost: " + model.getTotalMenuPrice()));
    tr.appendChild(td);
    tbdy.appendChild(tr);   

    return tbdy;
    }


