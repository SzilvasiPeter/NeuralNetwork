Perceptron1 brain;
Point[] points = new Point[100];

int trainingIndex = 0;

void settings() {
  size(600, 600);
}

void setup() {
  background(200);
  frameRate(60);
  brain = new Perceptron1();

  for (int i = 0; i < points.length; i++) {
    points[i] = new Point();
  }

  float[] inputs = {-1,0.5};
  int guess = brain.guess(inputs);
  println(guess);
}

void draw() {
  stroke(0);
  line(0, 0, width, height);
  for (Point pt : points) {
    pt.show();
  }
  for (Point pt : points) {
    float[] inputs = {pt.x, pt.y};
    int target = pt.label;
    //brain.train(inputs, target);
    int guess = brain.guess(inputs);
    if(guess == target){
      fill(0,255,0);
    }else{
      fill(255,0,0);
    }
      noStroke();
      ellipse(pt.x, pt.y, 8, 8);
    }
    
    Point training = points[trainingIndex];
    float[] inputs = {training.x, training.y};
    int target = training.label;
    brain.train(inputs, target);
    trainingIndex++;
    if(trainingIndex == points.length){
      trainingIndex = 0; 
    }
  }