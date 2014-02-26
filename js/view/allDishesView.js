
var AllDishesView = function (container,model) {

	var DISHES_PER_ROW = 4;

	var div = document.getElementById("allDish");
	div.setAttribute("class", "text-primary");

	var allStarter = model.getAllDishes("starter");
	var allMain  = model.getAllDishes("main dish");
	var allDessert  = model.getAllDishes("dessert");

	this.allDishes = [];

	//Place all dishes in one array
	for(var key = 0; key<allStarter.length; key++){
		var dish = allStarter[key];
		this.allDishes.push(dish);
	}
	for(var key = 0; key<allMain.length; key++){
		var dish = allMain[key];
		this.allDishes.push(dish);
	}
	for(var key = 0; key<allDessert.length; key++){
		var dish = allDessert[key];
		this.allDishes.push(dish);
	} 	

	var tbl=document.createElement('table');
	var tr;
	for(var key = 0 ; key<this.allDishes.length; key++){
		if(key%DISHES_PER_ROW==0){
			if(key!=0){
				tbl.appendChild(tr);
			}
			tr = document.createElement('tr');

		}
		var dish = this.allDishes[key];
        var td=document.createElement('td');
        createDishViews(td,dish,model.getPriceOfDish(dish));
        tr.appendChild(td);        
	}
	tbl.appendChild(tr);


    // tbl.style.width='100%';
    tbl.setAttribute('border','0');
    var tbdy=document.createElement('tbody');
    tbdy.appendChild(tbl);
    div.appendChild(tbl);
}