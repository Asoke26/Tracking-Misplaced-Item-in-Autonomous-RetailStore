
// Variables Declaration
let video;
let videoIsPlaying;

let poseNet;
let current_pose;
let current_skeleton;

let brain;
let button;

let playing = false;


// preload all required data
let paTH = "data/AiFi/pickup-events.mp4"
function preload() {
  console.log("Entered Preload Done ")
  video = createVideo(paTH,vidLoad);
  console.log("Preload Done ")
}


function setup() {
  console.log("setup Done ")
  video.size(1280,720);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener


	// video.play();
  videoIsPlaying = false;
  createCanvas(1280, 720); // Not Sure if it is necessary
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
  console.log("Finished Playing the Video 33");
  video.hide();


  // Defining new ml5 neural network
  const options = {
  inputs: 34,
  outputs: 2,
  task: 'classification',
  debug : true
  }
  
  brain = ml5.neuralNetwork(options);


}


function gotPoses(poses)
{
  console.log(poses);
  if(poses.length>0){
    current_pose = poses[0].pose;
    current_skeleton = poses[0].skeleton;
    console.log("Getting Poses ");

    // Make a plain data Array
    let input_array = [];
    for(let i=0;i<current_pose.keypoints.length;i++){
      let x = current_pose.keypoints[i].position.x;
      let y = current_pose.keypoints[i].position.y;

      input_array.push(x);
      input_array.push(y);
    }

    let terget_label = ["PickUp"];

    brain.addData(input_array,terget_label);



  }
}

function modelLoaded()
{
  console.log("PoseNet model Loaded")
}

//
function draw()
{
  image(video,0,0,width,height);

  if(current_pose){
    let leftE = current_pose.leftEye;
    let rightE = current_pose.rightEye;

    let d = dist(leftE.x,leftE.y,rightE.x,rightE.y);

    console.log("Length of the keypoint ",current_pose.keypoints.length);

    // Draw points for each keypoints
    for(let i=0;i<current_pose.keypoints.length;i++){
      let x = current_pose.keypoints[i].position.x;
      let y = current_pose.keypoints[i].position.y;
      // console.log("X Y",x,y);
      fill(0,0,255);
      ellipse(x,y,16,16);

    }

    // Connect Those points

    for(let i=0;i<current_skeleton.length;i++){
      let a = current_skeleton[i][0];
      let b = current_skeleton[i][1];
      strokeWeight(5);
      stroke(255,0,0);
      line(a.position.x,a.position.y,b.position.x,b.position.y);

    }


  }
}

// This function is called when the video loads
function vidLoad() {
  console.log("Check vidLoad")
  video.stop();
  video.play();
  setTimeout(105000);
  console.log("Finished Playing the Video");
  // video.stop();
  // videoIsPlaying = true;
}


// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    video.pause();
    brain.saveData();
    button.html('play');
  } else {
    video.loop();
    button.html('pause');
  }
  playing = !playing;
}