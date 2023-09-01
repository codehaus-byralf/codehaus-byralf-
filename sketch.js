let angleX = 0;
let angleY = 0;
let sphereRadius;

function setup() {
  let canvasContainer = select('#canvas-container');
  let canvas = createCanvas(canvasContainer.width, canvasContainer.height, WEBGL);
  canvas.parent('canvas-container');
  sphereRadius = min(width, height) / 2;
  noStroke();
}

function draw() {
  background(220);
  rotateX(angleX);
  rotateY(angleY);
  drawSphere();
}

function drawSphere() {
  let detail = 36; // Number of vertices per circle
  let angleStep = 360 / detail;

  for (let lat = 0; lat < 180; lat += angleStep) {
    beginShape(TRIANGLE_STRIP);
    for (let lon = 0; lon <= 360; lon += angleStep) {
      let x1 = sphereRadius * sin(radians(lat)) * cos(radians(lon));
      let y1 = sphereRadius * sin(radians(lat)) * sin(radians(lon));
      let z1 = sphereRadius * cos(radians(lat));

      let x2 = sphereRadius * sin(radians(lat + angleStep)) * cos(radians(lon));
      let y2 = sphereRadius * sin(radians(lat + angleStep)) * sin(radians(lon));
      let z2 = sphereRadius * cos(radians(lat + angleStep));

      fill(lerpColor(color(0, 255, 0), color(255), lat / 180));
      vertex(x1, y1, z1);
      vertex(x2, y2, z2);
    }
    endShape();
  }
}

function windowResized() {
  let canvasContainer = select('#canvas-container');
  resizeCanvas(canvasContainer.width, canvasContainer.height);
  sphereRadius = min(width, height) / 2;
}
