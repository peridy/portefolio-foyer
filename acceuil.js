const txtNom=document.getElementById('txtNom');
const contenairNom=document.getElementById('contenairUtilisateur');
const txtSolde=document.getElementById('txtSolde');

const btnCafe=document.querySelector('#cafe');
const btnThe=document.querySelector('#the');
const btnChocolat=document.querySelector('#chocolat');
const btnBoisson=document.querySelector('#boisson');
const btnEau=document.querySelector('#eau');
const btnGlace=document.querySelector('#glace');
const btnConfiserie=document.querySelector('#confiserie');
const btnMadelaine=document.querySelector('#madelaine');

const nbCafe=document.getElementById('nbCafe');
const nbThe=document.getElementById('nbThe');
const nbChocolat=document.getElementById('nbChocolat');
const nbBoisson=document.getElementById('nbBoisson');
const nbEau=document.getElementById('nbEau');
const nbGlace=document.getElementById('nbGlace');
const nbConfiserie=document.getElementById('nbConfiserie');
const nbMadelaine=document.getElementById('nbMadelaine');

const tarifCafe=document.getElementById('tarifCafe');
const totalCafe=document.getElementById('totalCafe');
const tarifChocolat=document.getElementById('tarifChocolat');
const totalChocolat=document.getElementById('totalChocolat');
const tarifThe=document.getElementById('tarifThe');
const totalThe=document.getElementById('totalThe');
const tarifConfiserie=document.getElementById('tarifConfiserie');
const totalConfiserie=document.getElementById('totalConfiserie');
const tarifEau=document.getElementById('tarifEau');
const totalEau=document.getElementById('totalEau');
const tarifGlace=document.getElementById('tarifGlace');
const totalGlace=document.getElementById('totalGlace');
const tarifMadelaine=document.getElementById('tarifMadelaine');
const totalMadelaine=document.getElementById('totalMadelaine');
const tarifBoisson=document.getElementById('tarifBoisson');
const totalBoisson=document.getElementById('totalBoisson');

const totalFacture=document.getElementById('nbTotal');

const btnAnnuler=document.getElementById('btnAnnuler');
const btnValider=document.getElementById('btnValider');

const deconnexion=document.getElementById('deconnexion');

const btnInitNom=document.getElementById('btnInitNom');
const dateDuJour=document.getElementById('calendrier');

var debutNom="";
//les noms actuels sont mis a la main mais il faudra une bdd apres et la charger dans ce tableau
var tabNom=["PERIDY VINCENT","MASSONNET ROMAIN","MARCHE FREDDY","DESROCHES STEPHANE","GUIHARD BENJAMIN","POTREAU JUNIOR"];
var tabIdNom=[];

//affichage en direct de la date d aujourdhui()
var annee=new Date().getFullYear();
var mois=new Date().getMonth();
var jour=new Date().getDate();
if (mois.length==1){
	mois=String("0"+mois); 
};
var aujourdhui=String(annee +"-"+ mois + "-" + jour);

dateDuJour.value=aujourdhui

//les evenements click sur chaque bouton
txtNom.addEventListener('keypress',(event)=>{
	debutNom=txtNom.value+event.key;
	initNomACharge(event);

});
txtNom.addEventListener('keyup',(event)=>{
	if(event.key== "Backspace" ||  event.key=="Delete"){
		debutNom=txtNom.value;	
		initNomACharge(event);
	}
});
btnCafe.addEventListener('click',()=>{
	
	calcul(nbCafe,tarifCafe,totalCafe);
});
btnThe.addEventListener('click',()=>{
	calcul(nbThe,tarifThe,totalThe);
});
btnChocolat.addEventListener('click',()=>{
	calcul(nbChocolat,tarifChocolat,totalChocolat);
});
btnBoisson.addEventListener('click',()=>{
	calcul(nbBoisson,tarifBoisson,totalBoisson);
});
btnEau.addEventListener('click',()=>{
	calcul(nbEau,tarifEau,totalEau);
});
btnGlace.addEventListener('click',()=>{
	calcul(nbGlace,tarifGlace,totalGlace);
});
btnConfiserie.addEventListener('click',()=>{
	calcul(nbConfiserie,tarifConfiserie,totalConfiserie);
});
btnMadelaine.addEventListener('click',()=>{
	calcul(nbMadelaine,tarifMadelaine,totalMadelaine);
});

btnAnnuler.addEventListener('click',()=>{
	initValeur();

})
btnValider.addEventListener('click',()=>{
	validerCommande();
	initValeur();
	alert('Commande validée '+ txtNom.value + ', il vous reste ' + txtSolde.value);
	txtNom.value="";
	txtSolde.value="0.00";
	txtNom.focus();
})

deconnexion.addEventListener('click',()=>{
	window.close();
})



function initNomACharge(e){
	
	//effacer les donnees pour recharger
        var first = contenairNom.firstElementChild;
		while (first) {
            first.remove();
            first = contenairNom.firstElementChild;
        }
	contenairNom.style.visibility="visible";
	if (debutNom!="")
	recupererNomCommencecantPar(String(debutNom).toUpperCase());
};



contenairNom.addEventListener('click',()=>{
	contenairNom.style.visibility="hidden";

});




//les fonctions
function validerCommande(){
	alert("prog validation commande");
}

function recupererNomCommencecantPar(debutMot){
	let longMot=parseInt(debutMot.length);
	//efface les noms deja proposé
	
	for(let i=0;i<tabNom.length;i++){
		if (tabNom[i].substring(0,longMot)==debutMot){
			
			//creation de la div avec le nom
			var divNom=document.createElement('div');
			divNom.classList.add('nom'); //ajout dela class progrmamme en css
			divNom.id=tabNom[i]; //attribution d'un id
			divNom.innerHTML=tabNom[i]; //on met le nom dans la div
			contenairNom.appendChild(divNom); //on affiche le nom dansle contenair
			
			//mettre un ecouteur sur chaque div creer
			divNom.addEventListener('click',(e)=>{
				txtNom.value=(e.target.id);
				afficheCompte(txtNom.value);
			})
		}
	}
}
function afficheCompte(nom){
	alert('prog de l\'affichage du solde de ' + nom);
}

function calcul(nbProduit,tarifProduit,totalProduit){
	nbProduit.innerHTML=parseInt(nbProduit.innerHTML)+1;
	totalProduit.innerHTML=parseFloat(tarifProduit.innerHTML*nbProduit.innerHTML).toFixed(2);
	totalFacture.innerHTML=parseFloat(parseFloat(totalFacture.innerHTML)+parseFloat(tarifProduit.innerHTML)).toFixed(2);
}


function initValeur(){
	nbCafe.innerHTML=0;
	nbChocolat.innerHTML=0;
	nbThe.innerHTML=0;
	nbConfiserie.innerHTML=0;
	nbEau.innerHTML=0;
	nbMadelaine.innerHTML=0;
	nbGlace.innerHTML=0;
	nbBoisson.innerHTML=0;

	totalCafe.innerHTML=0;
	totalChocolat.innerHTML=0;
	totalThe.innerHTML=0;
	totalBoisson.innerHTML=0;
	totalEau.innerHTML=0;
	totalGlace.innerHTML=0;
	totalMadelaine.innerHTML=0;
	totalConfiserie.innerHTML=0;

	totalFacture.innerHTML=0;
	contenairNom.style.visibility="hidden";
}

btnInitNom.addEventListener('click',()=>{
	initValeur();
	txtNom.value="";
	txtSolde.value="0.00";
	txtNom.focus();
})