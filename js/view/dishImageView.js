//Creates an element with a dishImage and text
function createDishViews(element,dish,desc,func) {
        var table = document.createElement("table");
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        //Add image
        var img = document.createElement('img');
        img.setAttribute("src", "images/" + dish.image);
        img.onclick = func;
        td.appendChild(img);
        tr.appendChild(td);
        table.appendChild(tr);
        //Add dish name
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        td.appendChild(document.createTextNode(dish.name));
        tr.appendChild(td);
        table.appendChild(tr);
		//Add description
		var td = document.createElement("td");
        var tr = document.createElement("tr");
        td.appendChild(document.createTextNode(desc));
        tr.appendChild(td);
        table.appendChild(tr);

        element.appendChild(table);
    }