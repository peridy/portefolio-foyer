
alert("le cercle");

	/* creation des variables*/
	var rayon1, rayon2,pi, surface1, surface2, difference

	/* init des variables connues*/
	rayon1=5.5;
	rayon2=3.5;
	pi=3.14;

	/*calcul des surfaces et de la difference*/
	surface1=rayon1*rayon1*pi;
	surface2=rayon2*rayon2*pi;
	difference=surface1-surface2;

	/*lecture des resultats*/
	document.write("le cercle de rayon " + rayon1 + "a une surface de  " + surface1 <br/>);
	document.write("le cercle de rayon " + rayon2 + "a une surface de  " + surface2 <br/>);
	alert("la difference des 2 surfaces est de " + difference);

