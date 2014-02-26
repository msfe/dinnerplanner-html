//Creates an element with a dishImage and text
function createDishViews(element,dish) {
        var table = document.createElement("table");
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        //Add image
        var img = document.createElement('img');
        img.setAttribute("src", "images/" + dish.image);
        td.appendChild(img);
        tr.appendChild(td);
        table.appendChild(tr);
        //Add text
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        td.appendChild(document.createTextNode(dish.name));
        tr.appendChild(td);
        table.appendChild(tr);
        element.appendChild(table);
    }