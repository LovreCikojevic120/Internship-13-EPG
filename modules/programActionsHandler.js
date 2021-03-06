import {adultContentPinNumber} from './passwordsAndEnums.js';

function addRating(){
	let rating = '0', ratingStars = '';

	while(rating !== ''){

		rating = prompt('Input a number between 1 and 5 to rate the program:');
		if(rating > 0 && rating < 6){

			for(let i = 0; i < rating; i++)
				ratingStars += '*';

			return ratingStars;
		}

		if(rating !== '')alert('Incorrect rating input');
		else return rating;
	}

}

function rateProgram(currentProgram){
	let ratingsString = localStorage.getItem('ratings'), rating;

	if(!ratingsString){
		rating = addRating();
		if(rating === '')return;

		currentProgram.rating = rating;
		localStorage.setItem('ratings', JSON.stringify([currentProgram]));
		alert('Program rating added');
		return;
	}

	localStorage.removeItem('ratings');
	let ratingsArray = JSON.parse(ratingsString);
	let currentRatedProgramIndex = ratingsArray.indexOf(
		ratingsArray.find(p => p.programName === currentProgram.programName));

	if(ratingsArray[currentRatedProgramIndex]){
		rating = addRating();
		if(rating === '')return;

		ratingsArray[currentRatedProgramIndex].rating = rating;
		alert('Program rating updated');
	}

	localStorage.setItem('ratings', JSON.stringify(ratingsArray));
}

function handleFavourites(currentProgram){
	let favouritesString = localStorage.getItem('favourites');

	if(!favouritesString){
		localStorage.setItem('favourites', JSON.stringify([currentProgram]));
		alert('Program added to favourites list');
		return;
	}

	localStorage.removeItem('favourites');
	let favouritesArray = JSON.parse(favouritesString);

	if(favouritesArray.some(item => item.programName === currentProgram.programName)){
		favouritesArray.splice(favouritesArray.indexOf(currentProgram), 1);
		alert('Program removed from favourites list');
	}
	
	else {
		favouritesArray.push(currentProgram);
		alert('Program added to favourites list');
	}
	localStorage.setItem('favourites', JSON.stringify(favouritesArray));
}

function adultContentShield(currentProgram){
	let password = '';

	if(currentProgram.category === 'Adult'){

		do
		{
			password = prompt('Input PIN to view adult content, to cancel leave empty field:');

			if(password === '')
				return false;

			if(password !== adultContentPinNumber)
				alert('PIN number incorrect!');
		}
		while(password !== adultContentPinNumber);

		alert('Password verified...');
		return true;
	}

	return true;
}

export {adultContentShield, handleFavourites, rateProgram};