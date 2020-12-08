function load(){
var req,data,content,txt="";
req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        content=JSON.parse(this.responseText);
        data=content.list;
        for(i=0;i<data.length;i++){
            txt+="<tr>"
            txt+="<td>"+data[i].slno+"</td>"
            txt+="<td>"+data[i].name+"</td>"
            txt+="<td>"+data[i].qty+"</td>"
            txt+="<td>"+data[i].unit+"</td>"
            txt+="<td>"+data[i].dept+"</td>"
            txt+="</tr>"
        }
        document.getElementById("myTable").innerHTML=txt;
    }
};
req.open("GET","grocery.json",true);
req.send();
}