let ctracker ;
let video ;
let positions ;

function setup(){
  createCanvas(400,300);

  video = createCapture(VIDEO);
  video.size(400,300);

  ctracker = new clm.tracker();
  ctracker.init(pModel);  
  ctracker.start(video.elt);
}

function draw(){
  clear();
  positions = ctracker.getCurrentPosition();
  // print(positions);

  for (let i=0; i<positions.length; i++) {
    print(positions[i][0]);
    // ellipse(positions[i][1],positions[i][0],10,10);
  }
}


