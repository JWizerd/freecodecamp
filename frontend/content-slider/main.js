$(document).ready(function(){
  // Auto Slide Options
  var autoSwitch = true;
  var autoSwitchSpeed = 4000;

  SliderWidget(".slide", "active", "#next");

  // button: #next
  // styleClass: .active { opacity: 1; transition: ease-in 1s; }
  // slideElm: .slide

});

function SliderWidget(slideElm, styleClass, button){
  initializeSlider(slideElm, styleClass);
  sliderClickTransition(slideElm, styleClass, button);
  sliderAutoSlide(styleClass, slideElm);
}

// initialize first slider
function initializeSlider(slideElm, styleClass){
  // get first slide active
  $(slideElm).first().addClass(styleClass);
  // hide all other slides
  $(slideElm).hide();
  // show first slide
  $(slideElm).show();
}

// transition slides on click
function sliderClickTransition(slideElm, styleClass, button){
  $(button).on("click", function(){
    sliderTransition(styleClass, slideElm);
  });
}

function sliderAutoSlide(styleClass, slideElm){
  setInterval(function(){
    sliderTransition(styleClass, slideElm);
  }, 3000);
}

function sliderTransition(styleClass, slideElm){
  if($("." + styleClass).is(":last-child")){
    $("." + styleClass).removeClass(styleClass);
    $(slideElm).first().addClass(styleClass);
  }
  else {
    $("." + styleClass).removeClass(styleClass).next().addClass(styleClass);
  }
}
