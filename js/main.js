var contador=1;
var c1="c1",c2="c2",c3="c3",c4="c4",c5="c5",c6="c6",c7="c7",c8="c8",c9="c9";

function marcar (boton){
	if(boton.className=="casilla"){
		boton.className="clicked";
		var text;
		if(contador%2 == 0){
			text = "X";
		}
		else{
			text = "O";
		}
		boton.value=text;
		boton.appendChild(document.createTextNode(text));
		contador++
		asignar(text,boton)
	}
}

function asignar(text,boton){
	if(c1==boton.name){
		c1=text;
	}
	else if(c2==boton.name){
		c2=text;
	}
	else if(c3==boton.name){
		c3=text;
	}
	else if(c4==boton.name){
		c4=text;
	}
	else if(c5==boton.name){
		c5=text;
	}
	else if(c6==boton.name){
		c6=text;
	}
	else if(c7==boton.name){
		c7=text;
	}
	else if(c8==boton.name){
		c8=text;
	}
	else if(c9==boton.name){
		c9=text;
	}
	validar(text);
}

function validar(text){
	if((c1==c2 && c2==c3) || (c4==c5 && c5==c6) || (c7==c8 && c8==c9) || (c1==c4 && c4==c7) || (c2==c5 && c5==c8) || (c3==c6 && c6==c9) || (c1== c5 && c5==c9) || (c3== c5 && c5==c7)){
		var contador = confirm("Ganaste");
	}
	reiniciar;
}

function reiniciar(){
	window.location.reload();
}