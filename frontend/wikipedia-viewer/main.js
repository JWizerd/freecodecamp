$(document).ready(function(){
  searchQuery()
  randomArticle();
});

var BASE = "http://en.wikipedia.org/w/api.php?"
var QueryPart1 = "format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=";
var QueryPart2 = "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?";

var pageIdFormatForArticle = "https://en.wikipedia.org/?curid=";

function searchQuery() {
  $("#submit-query").on("click", function(event){
    event.preventDefault();
    var userQuery = $("#search").val();
    loader(userQuery);
  });
}

function loader(string){
  var url = BASE + QueryPart1 + string + QueryPart2;
  $.getJSON(url, function(data){
    $.each(data.query.pages, function(key, val){
      appendData(val);
    });
  }).fail();
}

function fail() {
  alert("fail");
}

function appendData(val){
  $("main").append(
    "<article>" +
    "<h2><a href='" + pageIdFormatForArticle + val.pageid + "'>" + val.title + "</a></h2>" +
    "<p>" + val.extract + "</p>" +
    "</article>"
  );
}

function randomArticle(){
  $("#random").on("click" , function(){
    $(window).open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  })
};
