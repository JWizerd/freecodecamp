$(document).ready(function(){
  getRandomQuote();
});

function getRandomQuote(){
  url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  $("#quote-generator-link").on("click", function(){
    $.getJSON(url, function(data){
      $("#tweet").css("display", "block");
      $("#quote").text(data.quoteText);
      $("#author").text(data.quoteAuthor);
      var textToTweet = data.quoteText;
      sendATweet(textToTweet);
    }).fail(function(){
      alert("failure");
    });
  });
}

function sendATweet(text){
  $("#tweet").on("click", function(){
    if (text.length > 140) {
      alert("this quote is too long please generate another one");
    }
    else {
      var tweetLink = 'http://twitter.com/home?status=' +encodeURIComponent(text);
      window.open(tweetLink, '_blank');
    }
  });
}
