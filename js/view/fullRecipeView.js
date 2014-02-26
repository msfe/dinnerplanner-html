//ExampleView Object constructor
var FullRecipeView = function (container,model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
this.showList = container.find("#imageInfoPrepTable");

    //Set the inital values of the components
    $("#dishImage").attr("src", "images/" + dish.image);
    
    var tbdy=document.createElement('tbody');
    var menu = model.getFullMenu();
    for(var key in menu){
        var img = document.createElement('img');
        img.setAttribute("src", "images/" + menu[key].image);

        var name = menu[key].name;
        var shittyText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

        var p = "Preparations"
        var preparations = menu[key].description;

        var tr=document.createElement('tr');
        var td=document.createElement('td');
        td.appendChild(img);
        tr.appendChild(td);

        var td=document.createElement('td');
        td.appendChild(document.createTextNode(name));
        td.appendChild(document.createTextNode(shittyText));
        tr.appendChild(td);

        var td=document.createElement('td');
        td.appendChild(document.createTextNode(p));
        td.appendChild(document.createTextNode(preparations));
        tr.appendChild(td);

        tbdy.appendChild(tr)
    }
    
    this.showList.html(tbdy);

    /*****************************************  
          Observer implementation    
          *****************************************/

    //Register an observer to the model
    model.addObserver(this);
    
    //This function gets called when there is a change at the model
    this.update = function(arg){
        
    }
}