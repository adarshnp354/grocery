function load(){
var req,obj,data,content,x,txt="";
let grocery = 
        [
            {"slno":1, "name":"carrot", "qty":1, "unit":"kg", "dept":"vegetables"},
            {"slno":2, "name":"beetroot", "qty":2, "unit":"kg", "dept":"vegetables"},
            {"slno":3, "name":"onion", "qty":2, "unit":"kg", "dept":"vegetables"},
            {"slno":4, "name":"cucumber", "qty":3, "unit":"kg", "dept":"vegetables"},
            {"slno":5, "name":"tomato", "qty":5, "unit":"kg", "dept":"vegetables"},
            {"slno":6, "name":"drumstick", "qty":2 , "unit":"kg", "dept":"vegetables"},
            {"slno":7, "name":"avocado", "qty":1, "unit":"kg", "dept":"vegetables"},
            {"slno":8, "name":"ladies finger", "qty":4, "unit":"kg", "dept":"vegetables"},
            {"slno":9, "name":"potato", "qty":6, "unit":"kg", "dept":"vegetables"},
            {"slno":10, "name":"brinjal", "qty":8, "unit":"kg", "dept":"vegetables"}
        ]

obj = {table:"grocery"};
data=JSON.stringify(obj);
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        content=JSON.parse(this.responseText);
        txt += "<table border='1'>"
        for(x in content){
            txt +="<tr><td>" + content[x].name + "</td></tr>";
        }
        txt += "</table>"
        document.getElementById("myTable").innerHTML = txt;
    }
};
req.open("GET","file:///C:/Users/acer/Desktop/Adarsh_Task/grocery/grocery.json",true);
req.send("x=" + data);
}