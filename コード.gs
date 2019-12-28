function doGet() {
  
  var toppage=HtmlService.createTemplateFromFile("index");
  
  return toppage.evaluate();
  
}

function doPost(postdata){

 var sh=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 var time=new Date();
 
 var name=postdata.parameters.name.toString();
 var gender=postdata.parameters.gender.toString();
 var animal=postdata.parameters.animal.toString();
  
 sh.appendRow([time,name,gender,animal]);
  
 var resultpage=HtmlService.createTemplateFromFile("result");
 return resultpage.evaluate();
}