function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
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

	train(inputs, answer){
		let output = this.feeforward(inputs);

		// Convert to array
		outputs = Matrix.fromArray(outputs);
		targets = Matrix.fromArray(targets);

		//Calculate the error
		// Error = Target - Outputs
		let output_error = Matrix.substract(targets, outputs);

		//Calculate a hidden layer errors
		let who_t = Matrix.transpose(this.weights_ho);
		let hidden_errors = Matrix.multiply(who_t, output_error);

		/*outputs.print();
		targets.print();
		error.print();*/
	}
}