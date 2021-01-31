var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

c.style.width = "90vh"
c.style.backgroundColor = "#333";
var radius = c.width / 2;

var time = new Date;
var segundo = time.getSeconds();
var minuto = time.getMinutes();
var hora = time.getHours();

ctx.translate(radius,radius);
radius *= 0.9;


setInterval(crearReloj, 1000);



function crearReloj(){
	time = new Date;
	segundo = time.getSeconds();
	minuto = time.getMinutes();
	hora = time.getHours();
	ctx.beginPath();
	ctx.fillStyle = "#eee";
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fill();
	dibujarCara();
	dibujarNumeros();
	dibujarPalitos(hora, minuto, segundo);
};

function dibujarCara(){
	var radGrad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
	radGrad.addColorStop(0,"#333");
	radGrad.addColorStop(0.5,"white");
	radGrad.addColorStop(1,"#333");
	ctx.strokeStyle = radGrad;
	ctx.lineWidth = radius*0.1;
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = "#333";
	ctx.arc(0,0,radius*0.1,0,2*Math.PI);
	ctx.fill();
};

function dibujarNumeros(){
	let num;
	let ang;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.font = radius * 0.15 + "px arial";
	for(num=1; num<13; num++){
		ang = (num * Math.PI / 6) + Math.PI;
		ctx.rotate(ang);
		ctx.translate(0,radius*0.8);
		ctx.rotate(-ang);
		ctx.fillText(num,0,0);
		ctx.rotate(ang);
		ctx.translate(0,-radius*0.8);
		ctx.rotate(-ang);
	};
};

function dibujarPalitos(h,m,s){
	function crearPalito(a,w,l,c) {
		let angle = a*Math.PI/6 + Math.PI;
		ctx.rotate(angle);
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineCap = "round"
		ctx.strokeStyle = c;
		ctx.lineWidth = radius * w;
		ctx.lineTo(0,radius*l);
		ctx.stroke();
		ctx.moveTo(0,0);
		ctx.rotate(-angle);
	};

	//Hora
	crearPalito(h,0.1,0.58,"#333");
	//Minuto
	let m5 = m/5;
	crearPalito(m5,0.05,0.68,"#333");
	//Segundo
	let s5 = s/5;
	crearPalito(s5,0.02,0.7,"#f33");
};