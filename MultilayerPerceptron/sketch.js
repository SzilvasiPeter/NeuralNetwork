
var brain;

function setup(){

	let a = new Matrix(2, 2);
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
	console.table(e.matrix);*/
}

function draw(){

}