function load(){
var req,data,content,x,txt="";
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(this.readyState===4){
        content=JSON.parse(this.responseText);
        data=content.list;
        for(i=0;i<data.length;i++){
            txt+="<tr>"
            txt+="<th>"+data[i].slno+"</th>"
            txt+="<th>"+data[i].name+"</th>"
            txt+="<th>"+data[i].qty+"</th>"
            txt+="<th>"+data[i].unit+"</th>"
            txt+="<th>"+data[i].dept+"</th>"
            txt+="</tr>"
        }
        document.getElementById("myTable").innerHTML=data.slno;
        document.getElementById("myTable").innerHTML=data.name;
        document.getElementById("myTable").innerHTML=data.qty;
        document.getElementById("myTable").innerHTML=data.unit;
        document.getElementById("myTable").innerHTML=data.dept;
    }
};
req.open("GET","grocery.json",true);
req.send();
}