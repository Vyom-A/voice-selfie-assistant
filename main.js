 var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

 function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    document.getElementById("start_button").innerHTML = "Stop";
 }

 recognition.onresult = function (event) {
console.log(event);

var content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = content;
if (content == "take my selfie"){
   document.getElementById("start_button").innerHTML = "Start";
speak();
}else {
   document.getElementById("start_button").innerHTML = "Start";
alert ( "Please try saying 'take my selfie'");
}

console.log(content);
 }

 function speak() {
   var synth = window.speechSynthesis;
   var speak_data = "Taking you selfie in 5 seconds";
   var utter_this = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_this);
   Webcam.attach(camera);

setTimeout(function()

{
take_snapshot();
save();

},5000);

 }

 var camera  = document.getElementById("camera");

Webcam.set({
width : 360,
height : 250,
image_format : 'jpeg',
jpeg_quality : 90
});

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id = "selfie_img" src = "' + data_uri + '"/>';
});
}

function save() {
  link = document.getElementById("link");
  image = document.getElementById("selfie_img").src;
 link.href = image;
 link.click();
}