function load(){
var req,data,content,x,txt="";
data="file:///C:/Users/acer/Desktop/Adarsh_Task/grocery/grocery.json";
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(req.readyState==4){
        content=JSON.parse(req.responseText);
        document.getElementById("slno").innerHTML=content.slno;
        document.getElementById("name").innerHTML=content.name;
        document.getElementById("quantity").innerHTML=content.qty;
        document.getElementById("unit").innerHTML=content.unit;
        document.getElementById("dept").innerHTML=content.dept;
    }
};
req.open("GET",data,true);
req.send();
}