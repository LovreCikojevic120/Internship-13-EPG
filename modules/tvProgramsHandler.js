import {adultContentPinNumber} from './constantsAndEnums.js';

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

export {adultContentShield};