//indicele paharului pe care il alege player-ul
var userChoice ; 

function c1(){
	userChoice=1;
	document.getElementById("textbox").value="1";
}

function c2(){
	userChoice=2;
	document.getElementById("textbox").value="2";
}

function c3(){
	userChoice=3;
	document.getElementById("textbox").value="3";
}


function pahar(ID, ball){
	this.ID = ID;
	this.ball = ball;
	
}


function random(){
	return Math.floor( (Math.random() * 100) % 3);
}

function start(){
	
	
	if (userChoice > 3 || userChoice < 1)
		alert("Please introduce a number in range [1, 3]");
	
	var p1 = new pahar(1, false);
	var p2 = new pahar(2, true);
	var p3 = new pahar(3, false);
	
	var vectorPahare = [p1, p2, p3];
	
	//se fac 5 interschimbari
	var count = 5;
	while (count > 0){
	
		var r1 = random();
		var r2 = random();
	
		//in caz ca se genereaza numere egale
		while (r1 == r2){
			r1 = random();
			r2 = random();
		}
		var aux;
		aux = vectorPahare[r1];
		vectorPahare[r1] = vectorPahare[r2];
		vectorPahare[r2] = aux;
			
		count--;
	}
	
	//daca in urma interschimbarilor mingea se afla
	//in spatele paharului de pe pozitia pe care a
	//ales-o utilizatorul jocul este castigat
	if (vectorPahare[userChoice - 1].ball == true)
		alert("The force will be with you,always!");
	else
		alert("That is why you failed!");
}