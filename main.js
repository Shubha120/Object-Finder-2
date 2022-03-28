
function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(400,400);
    
}

function draw(){
    image(video,0,0,400,400);
}
 function start(){
     objectDetector = ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML="Status Detecting Objects";

 }

 function modelLoaded(){
    console.log("Model is Loaded");
 }
