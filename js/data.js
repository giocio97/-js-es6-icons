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


selezione.addEventListener ("change", selectArray);
function selectArray ( ) {
	
	let sceltaCat = parseInt (selezione.value);
	console.log(sceltaCat);
	sceltaCat = 0;
	
	switch (sceltaCat) {
		case 0:
			default:
				stampaElementiArr(icons);
			
	break;
	
	case 1 :
		const animali = icons.filter((myanimal) => {
			if (myanimal.type === 'animal'){
				stampaElementiArr(animali);
			   return true;
		   };
		});
		console.log(animali);
		break;

		case 2 :
			const vegetali = icons.filter((myveg) =>{
				if (myveg.type == 'vegetable' ){
					stampaElementiArr(vegetali);
					return true;
				}
			});
			console.log(vegetali);
			break;

			case 3 :
				const user = icons.filter((myuser) =>{
					if (myuser.type == 'user' ){
						stampaElementiArr(user);
						return true;
						
					}
				
				
			});
			console.log(`veg`, vegetali);
			break;

			


	}};
	



 
	 	// filtrare per categoria	





	

// creo un ciclo per stampare le icone
function stampaElementiArr(icons) {
	container.innerHTML = " ";
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
	
}







	


			




