function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y){
	//return sigmoid(x) * (1 - sigmoid(x));
	return y * (1 - y);
}

class NeuralNetwork{
	constructor(input_nodes, hidden_nodes, output_nodes){
		this.input_nodes = input_nodes;
		this.hidden_noddes = hidden_noddes;
		this.output_nodes = output_nodes;

		this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
		this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
		this.weights_ih.randomize();
		this.weights_ho.randomize();

		this.bias_h = new Matrix(this.hidden_nodes,1);
		this.bias_o = new Matrix(this.output_nodes,1);
		this.bias_h.randomize();
		this.bias_o.randomize();
		this.learning_rate = 0.1;
	}
	feeforward(input_array){
		//Generating the hidden outputs
		let inputs = Matrix.fromArray(input_array);
		let hidden = new Matrix.multiply(this.weights_ih, inputs);
		hidden.add(this.bias_h);
		//activation function
		hidden.map(sigmoid);
		//Generate output
		let output = Matrix.multiply(this.weights_ho, hidden);
		output.add(this.bias_o);
		output.map(sigmoid);
		//Sening it back to array
		return out.toArray();
	}

	train(input_array, traget_array){
		//let output = this.feeforward(inputs);

		//Generating the hidden outputs
		let inputs = Matrix.fromArray(input_array);
		let hidden = new Matrix.multiply(this.weights_ih, inputs);
		hidden.add(this.bias_h);
		//activation function
		hidden.map(sigmoid);
		//Generate output
		let outputs = Matrix.multiply(this.weights_ho, hidden);
		outputs.add(this.bias_o);
		outputs.map(sigmoid);

		// Convert to array
		//outputs = Matrix.fromArray(outputs);
		let targets = Matrix.fromArray(traget_array);

		//Calculate the error
		// Error = Target - Outputs
		let output_errors = Matrix.substract(targets, outputs);

		//let gradient = outputs * (1 - outputs);
		//Calculate Gradient
		let gradients = new Matrix.map(outputs, dsigmoid);
		gradients.multiply(output_errors);
		gradients.multiply(this.learning_rate);


		let hidden_T = Matrix.transpose(hidden);
		let weights_ho_deltas = Matrix.multiply(gradients, hidden_T);

		//Adjust a weights and biases by deltas (output - hidden)
		this.weights_ho.add(weights_ho_deltas);
		this.bias_o.add(gradients);

		//Calculate a hidden layer errors
		let who_t = Matrix.transpose(this.weights_ho);
		let hidden_errors = Matrix.multiply(who_t, output_error);

		let hidden_gradient = new Matrix.map(hidden, dsigmoid);
		hidden_gradient.multiply(hidden_errors);
		hidden_gradient.multiply(this.learning_rate);

		let inputs_T = Matrix.transpose(inputs);
		let weights_ih_deltas = Matrix.multiply(hidden_gradient, inputs_T);

		//Adjust weights and biases by deltas (hidden - input)
		this.weights_ih.add(weights_ih_deltas);
		this.bias_h.add(hidden_gradient);
		/*outputs.print();
		targets.print();
		error.print();*/
	}
}