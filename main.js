Status = "";
objects = [];

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status :  Detecting Objects";
}

function preload() {
    Alert_Alarm = new Audio("Alert_Alarm.mp3");
}

function draw() {
    image(video, 0, 0, 380, 380);

    if(Status != "")
    {
        objectDetector.detect(video, gotResult);
        
        if(objects = "person"){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Baby Found";
        }
        else if(objects.length < 1){
            document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
            Alert_Alarm.play();
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function start(){
    
}