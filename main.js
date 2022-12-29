function preload() {
hand= loadImage("hand.png")
hand_2= loadImage("hand_2.png")
}
noseX = 0
noseY = 0
leftWristX=0
rightWristX=0
function setup() {
    canvas = createCanvas(550, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(350, 450)
    video.position(10, 10)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', getPoses)
}
function modelloaded() {
    console.log("modelloaded")
}

function getPoses(results) {
    
    if (results.length > 0) {

        console.log("dONE")
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("noseX " + noseX)
        console.log("noseY " + noseY)
        leftWristX= results[0].pose.leftWrist.x
        rightWristX= results[0].pose.rightWrist.x
    }
}
function draw() {
    background("pink")
    fill(0, 0, 0)
    stroke(0, 0, 0)
    width= leftWristX-rightWristX
    rect(noseX, noseY, width, 100)
    
image(hand,noseX-80,noseY,100, 100)
image(hand,noseX+width-20,noseY,100, 100)
}