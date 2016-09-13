$(document).ready(function(){

});

var API = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max"

function loader(){
  $.get(API, function(data){
    alert("success");
  }).fail(function(){
    alert("fail");
  });
}

function randomArticle(){
  $(".random").on("click" , function(){
    $(window).open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  })
}


//http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max
// https://en.wikipedia.org/?curid= ?curid= is used to convert wiki page ids.
