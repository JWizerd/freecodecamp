
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $street = $("#street");
    var $city = $("#city");

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // GOOGLE STREETVIEW API

    // 1.0 construct API endpoint
    var streetAddress = $street.val();
    var cityName = $city.val();
    var fullAddress = streetAddress + " " + cityName;
    var streetViewImage = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="
    var url = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + encodeURI(streetAddress) + encodeURI(cityName);

    // 2.0 append background image retrieved from API call
    $($greeting).text('Do you really want to live at ' + fullAddress + '?');
    $("body").append('<img class="bgimg" src="' + url + '">');

    // NEW YORK TIMES API
    // 1.0 construct the API endpoint
    NYT_API_KEY = "ec62a640e3fd48509aadd8f65d9bc3b0";
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytURL += '?' + $.param({
    'api-key': NYT_API_KEY,
    'q': cityName,
    'sort': "newest"
    });

    // 2.0 ajax bitch
    $.getJSON(nytURL, function(data) {
      citySpecificHeader("#nytimes-header");
      $.each(data.response.docs, function(key, val){
        appendNytArticles(val);
      });
    }).fail(function(){
      alert("error");
    });

    function appendNytArticles(val) {
      $("#nytimes-articles").append(
        "<li class='article'>" +
        "<h3><a href='" + val.web_url + "'>" + val.headline.main +
        "</a></h3>" +
        "<p>" + val.lead_paragraph + "</p>" +
        "</li>"
      );
    }

    function citySpecificHeader(element) {
      $(element).text('Articles about ' + cityName);
    }

    // WIKIPEDIA RELEVANT LINKS

    // 1.0 construct endpoint
    var WIKI_BASE_URL = "http://en.wikipedia.org/w/api.php?"
    var QueryPart1 = "format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=";
    var QueryPart2 = "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?";
    var wikiUrl = WIKI_BASE_URL + QueryPart1 + cityName + QueryPart2;

    // 2.0 ajax again bitch
    $.getJSON(wikiUrl, function(data){
      $.each(data.query.pages, function(key, val) {
        appendWikiArticles(val);
      });
    }).fail(function(){
      alert("wiki error");
    });

    var pageIdFormatForArticle = "https://en.wikipedia.org/?curid=";

    function appendWikiArticles(val) {
      $("#wikipedia-links").append(
        "<li class='article'>" +
        "<h3><a href='" + pageIdFormatForArticle + val.pageid + "'>" + val.title + "</a></h3>" +
        "</li>"
      );
    }

    return false;
};

$(document).ready(function(){
  $('#form-container').submit(loadData);
});
