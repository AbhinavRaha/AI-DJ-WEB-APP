song="";

scoreLeft=0;
scoreRight=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function preload()
{
song =loadSound("music.mp3");
}

function setup()
{

    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("poseNet modle is loaded");
}

function gotPoses(results)

{
console.log  (results)

}

function draw()
{
image (video,0,0,500,500);
}

