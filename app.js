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


var dataMgr = function (obj) {
    var afterDataFiltered = [];
    var dataMgr = function () {
        console.log("hello");
        this.sourceData
        var that = this
        return that;
    }
    this.getSourceData = function (){
        return this.sourceData
    }
    this.sourceData = obj.items;
    this.liveData = this.sourceData;
    
    this.filterData = function () { 
        this.liveData = jQuery.grep(this.sourceData, function(a) {
            return a.sex =="m";
        });
        for (var i = 0; i < afterDataFiltered.length; i++) {
            afterDataFiltered[i](this);
        }
    };
    
    this.onFilterData = function (callback) {
        afterDataFiltered.push(callback);
    };
    
    dataMgr();
    //return {dataMgr:dataMgr() };
}




//var matt = {};
//matt.sourceData = $("#theData").data("json");
//matt.liveData = matt.sourceData;

var dataObj = new dataMgr($("#theData").data("json"));

dataObj.onFilterData(function(object){
    $("#listWrap").html(liTmp(object.liveData));
});
  $("#listWrap").html(liTmp(dataObj.getSourceData()));
  $("#men").on("click", function(e){
    $(this).css("color", "red");
    dataObj.filterData();
   
  });