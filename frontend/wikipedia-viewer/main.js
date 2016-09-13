$(document).ready(function(){
  loader();
});

var BASE = "http://en.wikipedia.org/w/api.php?"
var pageQuery = "format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?"
var url = BASE + pageQuery;

function loader(){
  $.getJSON(url, function(data){
    alert("success");
    $.each(data.query.pages, function(key, val){
      $("main").append("<article></article>");
      $("article").append("<h2>" + val.title + "</h2>");
    });
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
