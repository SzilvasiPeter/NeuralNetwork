Perceptron p;

Point[] points = new Point[100];
void settings(){
  size(400, 400);
}
void setup(){
  background(200);
  frameRate(60);
  p = new Perceptron();
  
  for(int i = 0; i < points.length; i++){
   points[i] = new Point(); 
  }
  
  float[] inputs = {-1,0.5};
  int guess = p.guess(inputs);
  println(guess);
}

void draw(){
  stroke(0);
  line(0,0, width, height);
  for(Point p: points){
    p.show(); 
  }
}