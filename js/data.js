const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector(".container");

const selezione = document.getElementById ("selezione-icone");
// creo un ciclo per stampare le icone
icons.forEach((myicone)=> {
	
	let classePiuicons =  myicone.prefix + myicone.name ;
	let classePiuFam =  myicone.family ;
	
	console.log(classePiuicons);
	console.log(classePiuFam);
	
	const cardIcon = document.createElement ("div");
	cardIcon.classList.add ( "card-icona" );

	let iconaStamp = document.createElement ("i");
	let iconaNome = document.createElement ("h4");
	iconaNome.append (myicone.name);
	
	iconaStamp.classList.add ( classePiuFam );
	iconaStamp.classList.add ( classePiuicons );
	container.append(cardIcon);
	cardIcon.append(iconaStamp);
	cardIcon.append(iconaNome);
	
	
	// aggiungere il colore alle icone 
	if (myicone.color === `blue`){
		 iconaStamp.classList.add ("blu");
		return true;
	} 
		if (myicone.color === `orange`){
			 iconaStamp.classList.add ( "arancio" );
			return true;
		} 
	if (myicone.color === `green`){
				 iconaStamp.classList.add ( "verde" );
				return true;
			} 



		
	
});
console.log(icons);



// selezione.addEventListener ("change",
// function( ) {
// 	container.innerHTML = " ";
// 	const sceltaCat = selezione.value;
// 	console.log(sceltaCat);
	
// 	switch (sceltaCat) {
// 		case 0:
// 			default:
			
// 	break;
	
// 	case 1 :
//

// 
	
// });	
// 	}

// }
// );

// filtrare per colore

// const coloreblu = icons.filter((mycolori) => {
	
	
// });
// 	console.log("colore blu", coloreblu);
	
		
// 	const colorearancio = icons.filter((mycolori) => {
	
		
// 	});
// 		console.log("colore arancio", colorearancio);
		
// 		const coloreverde = icons.filter((mycolori) => {
	
			
// 		});
		
// 		console.log("colore verde", coloreverde);
 
	 	// filtrare per categoria	
const animali = icons.filter((myanimal) => {
			if (myanimal.type === 'animal'){
				
			   return true;
		   };
		});
		console.log(animali);

const vegetali = icons.filter((myveg) =>{
	if (myveg.type == 'vegetable' ){
		return true;
	}
});
console.log(vegetali);

const user = icons.filter((myuser) =>{
	if (myuser.type == 'user' ){
		return true;
	}
});
console.log(vegetali);
	



	


			




