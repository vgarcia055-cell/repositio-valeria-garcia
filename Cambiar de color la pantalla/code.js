onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/Mi-Burrito-Sabanero--Juana--Mundo-Canticuentos.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://i.pinimg.com/1200x/af/a4/02/afa4022d34aa407f459bd74eb2b52da0.jpg");
});
