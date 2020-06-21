document.getElementById("action").addEventListener("click", function(){
              
              var myArray = new Array();
              var f = myArray.lenght;    
              var m = "My string";
                  m = m.toLowerCase();
              defult:
              while(f != '0'){ 
                  
                 if(isNaN(f)){
                  var s = "Please add an item to the to do list"
                  f = prompt(s);
              }else {
                f = prompt("Please add an item to the to do list");
              }
          }
          document.getElementById("todo-list").innerHTML = f;
          
	myArray.push(prompt(f, ""));
	var l = "<h2>Please add an item to the to do list</h2>";
      f += "<ol>";
       f  += "<li>" + f + "" +myArray +  "" + "\"</li>";
      f += "</ol>";
    document.getElementById("todo-list").innerHTML = l;

});