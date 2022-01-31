img = "";
status = "";
objects = [];
function preload() {
    img = loadImage('dog_cat.jpg')
}
function setup() {
    canvas=createCanvas(640 ,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420); 
    if(status !="")
    {
    for (i = 0; i < object.length; i++) 
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#FF0000");
        percent = floor(object[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y )
        noFill();
        stroke("FF0000")
        rect(object[i].x, objects[i].y, objects[i].width + 15, object[i].height + 15)
    }
    }
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("Blue")
    rect(30, 60, 450, 350)

    fill("blue");
    text("Cat", 320, 120)
    noFill();
    stroke("red");
    rect(300, 90, 270,320)
}
 function modelLoaded() {
     console.log ("ModelLoaded !")
     Status = true;
     objectDetector.detect(img, gotResult);
 }
 function gotResult(error, results) {
     if (error) {
         console.log(error);
     }
     console.log(results);
     object = results;
 }
