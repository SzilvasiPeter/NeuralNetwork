
// let m = new Matrix(3, 2);
class Matrix{
	constructor(rows, cols){
		this.rows = rows;
		this.cols = cols;
		this.data = [];

		for(let i = 0; i < this.rows; i++){
			this.data[i] = [];
			for(let j = 0; j < this.cols; j++){
				this.data[i][j] = 0;
			}
		}
	}

	randomize(){
		for(let i = 0; i < this.rows; i++){
			for(let j = 0; j < this.cols; j++){
				this.data[i][j] = Math.floor(Math.random() * 10);
			}
		}
	}

	transpose(){
		let result = new Matrix(this.cols, this.rows);;
		for(let i = 0; i < this.rows; i++){
				for(let j = 0; j < this.cols; j++){
					result.data[j][i] = this.data[i][j];
				}
			}
		return result;
	}

	static multiply(a, b){
		//Matrix product
			if(a.cols != b.rows){
				console.log("Columns of A must match rows of B");
				return undefined;
			}

			let result = new Matrix(this.rows, n.cols);
			let a = this;
			let b = n; 

			for(let i = 0; i < result.rows; i++){
				for(let j = 0; j < result.cols; j++){
					//Dot product
					for(let k = 0; k < a.cols; k++){
						sum += a.data[i][k] * b.data[k][j];
					}
					result.data[i][j] = sum; 
				}
			}
			return result;
	}

	multiply(n){
		//Scaler prodcut
		for(let i = 0; i < this.rows; i++){
			for(let j = 0; j < this.cols; j++){
				this.data[i][j] *= n;
			}
		}
	}

	add(n){
		if(n instanceof Matrix){
			for(let i = 0; i < this.rows; i++){
				for(let j = 0; j < this.cols; j++){
					this.data[i][j] += n.data[i][j];
				}
			}		
		}else{
			for(let i = 0; i < this.rows; i++){
				for(let j = 0; j < this.cols; j++){
					this.data[i][j] += n;
				}
			}
		}
	}

	map(func){
		// Apply a function  to every element of matrix
		for(let i = 0; i < this.rows; i++){
			for(let j = 0; j < this.cols; j++){
				let val = this.data[i][j];
				this.data[i][j] = func(val);
			}
		}
	}

	print(){
		console.table(this.data); 
	}
}