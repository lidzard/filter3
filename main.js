var mx = 0;
var my = 0;
var noseX = 0;
var noseY = 0;
function preload() {
img  = loadImage("Moustache-PNG-Pic.png");
}
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
    cam.size(500, 500);
    poseNet = ml5.poseNet(cam, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    image(cam, 0, 0, 500, 500);
    fill("red");
    image(img, noseX -40, noseY, 70, 30)
}
function save()
{
    save()
}
function modelLoaded()
{
    console.log("model is Loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log(noseX);
        console.log(noseY);

    }
}
