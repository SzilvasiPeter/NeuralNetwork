/*let training_data = [
	{
		inputs: [0, 0],
		targets: [0]
	},
	{
		inputs: [1, 0],
		targets: [1]
	},
	{
		inputs: [0, 1],
		targets: [1]
	},
	{
		inputs: [1, 1],
		targets: [0]
	}
];


function setup(){

	/*let a = new Matrix(2, 2);
	a.randomize();
	a.print();

	function doubleIt(x){
		return x * 2;
	}

	a.map(doubleIt);
	a.print();

	/*let a = new Matrix(2,3);
	let b = new Matrix(3,2);
	a.randomize();
	b.randomize();
	console.table(a.matrix);
	console.table(b.matrix);

	let c = a.multiply(b);
	console.table(c.matrix);

	let d = new Matrix(2,3);
	d.randomize();
	let e = d.transpose();
	console.table(d.matrix);
	console.table(e.matrix);

	let nn = new NeuralNetwork(2, 2, 1);

	for(let i = 0; i < 50000; i++){
		let data = random(training_data);
		nn.train(data.inputs, data.targets);	
	}

	console.log(nn.feedforward([0, 0]));
	console.log(nn.feedforward([1, 0]));
	console.log(nn.feedforward([0, 1]));
	console.log(nn.feedforward([1, 1]));
	//console.log(output);
}*/
let nn;
let lr_slider;

let training_data =[
	{
		inputs: [0,0],
		outputs: [0]
	},
	{
		inputs: [0,1],
		outputs: [1]
	},
	{
		inputs: [1,0],
		outputs: [1]
	},
	{
		inputs: [1,1],
		outputs: [0]
	}
];

function setup(){
	createCanvas(400,400);
	nn = new NeuralNetwork(2,4,1);
	lr_slider = createSlider(0.01, 0.5, 0.1, 0.01); 
}

function draw(){
	background(0);

	for(let i = 0; i < 10000; i++){
		let data = random(training_data)
		nn.train(data.inputs, data.outputs);	
	}

	nn.setLearningRate(lr_slider.value());

	let resolution = 10;
  	let cols = width / resolution;
  	let rows = height / resolution;
  	for (let i = 0; i < cols; i++) {
    	for (let j = 0; j < rows; j++) {
      		let x1 = i / cols;
      		let x2 = j / rows;
      		let inputs = [x1, x2];
      		let y = nn.predict(inputs);
      		
      		noStroke();
      		fill(y * 250);
      		rect(i * resolution, j * resolution, resolution, resolution);
    }
  }
}