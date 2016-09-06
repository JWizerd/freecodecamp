$(document).ready(function(){
  getRandomQuote();
});

function getRandomQuote(){
  url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  $("#quote-generator-link").on("click", function(){
    $.getJSON(url, function(data){
      $("#quote").text(data.quoteText);
      $("#author").text(data.quoteAuthor);
    }).fail(function(){
      alert("failure");
    });
  });
}
