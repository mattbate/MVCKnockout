//var source = "{{#items}}<li>{{name}}</li>{{/items}}";
var liTmp = Handlebars.compile($("#litpl").html());

/* var data = {"items":[
  {"name":"Brian", "sex": "m", "age":30}, 
  {"name":"sharon", "sex": "f", "age":20}, 
  {"name":"alex", "sex": "m", "age":25},
  {"name":"Bert", "sex": "m", "age":30}, 
  {"name":"kim", "sex": "f", "age":20}, 
  {"name":"lex", "sex": "m", "age":25},
  {"name":"Simon", "sex": "m", "age":30}, 
  {"name":"stacey", "sex": "f", "age":20}, 
  {"name":"ashton", "sex": "m", "age":25},
  {"name":"Boris", "sex": "m", "age":30}, 
  {"name":"Sarah", "sex": "f", "age":20}, 
  {"name":"alex", "sex": "m", "age":25},
  {"name":"Brian", "sex": "m", "age":30}, 
  {"name":"sharon", sex: "f", "age":20}, 
  {"name":"alex", "sex": "m", "age":25},
  {"name":"Brian", "sex": "m", "age":30}, 
  {"name":"sharon", "sex": "f", "age":20}, 
  {"name":"alex", "sex": "m", "age":25},
  {"name":"Brian", "sex": "m", "age":30}, 
  {"name":"sharon", "sex": "f", "age":20}, 
  {"name":"alex", "sex": "m", "age":25}
  ]};
 */


var dataMgr = function (obj){
    var dataMgr = function(){    
        console.log("hello");
        var that = this
        return that;
    }
    
    this.options = obj;
    var myvar = "a string";
    //this.dataMgr()
    //return {dataMgr:dataMgr() };
}




var matt = {};
matt.sourceData = $("#theData").data("json");
matt.liveData = matt.sourceData;

var dataObj = new dataMgr(matt.liveData);

$("#listWrap").html(liTmp(matt.liveData));
  
  
  $("#men").on("click", function(e){
    $(this).css("color", "red");
    liveData = jQuery.grep(data.items, function(a){
       return a.sex =="m";
    });
    $("#listWrap").html(liTmp(liveData));
  });