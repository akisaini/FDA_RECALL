//add button
var counter = 1;
var limit = 10;
var values = new Array();

function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " food items.");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<br><input type='text' name='newdivName" + counter + "'>";
          document.getElementById(divName).appendChild(newdiv); 
          counter++;    
     }
};

//search btn
function f1(){

    var elements = document.getElementById('dynamicInput') 
    var inputs = elements.getElementsByTagName('input')
        values.push($('input[name="boxy"]').val());
        for (var i = 1; i < inputs.length; i++){
        values.push($('input[name="newdivName'+i+'"]').val());
      }

    //clears the forms after submitting the vals into the array
      var iplist = document.getElementsByTagName('input');
      for(var i = 0; i < iplist.length; i++) {
      if(iplist[i].type == 'text' || iplist[i].name == 'boxy')
      iplist[i].value = '';
     }
      alert(values);
};      

//messing with the data file
var fs = require('fs');
var file = fs.readFileSync('fda_food.json', 'utf8');
var fda_data=JSON.parse(file);

console.log(JSON.stringify(fda_data));
console.log("xxxx----------------xxxx");
//set up forerunner-db

var ForerunnerDB = require('forerunnerdb');
var fdb = new ForerunnerDB();
var db = fdb.db("recalled"); //db name
var maincoll = db.collection("maincoll");
maincoll.insert(fda_data);

// now search the collection for the string "eggs" or any other string as case insensitive using regexp '/string/i'

var searchResultArray = maincoll.find({},{
  $elemsMatch: {
  RECALLS_DATA : {
		PRODUCT:[
			{
				COMPANY: {
        __cdata : / Thomas Hammer Coffee Roasters Inc. /i 
        }
      }
    ]
  }
} 
});

console.log(searchResultArray);

/*
    alert(result);
    // alert that list is empty!
 */ 



