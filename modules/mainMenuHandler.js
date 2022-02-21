import {PrintPrograms, PrintChannels, FindProgramByIndex, PrintProgramDetails, currentTime} from "./utils.js";
import {channels} from './tvPrograms.js'
import {adultContentShield, handleFavourites, rateProgram} from './programActionsHandler.js';
import {programActionChoice, setPinNumber} from './passwordsAndEnums.js';

function changePassword(){
	let newPin = '';

	do{

		newPin = prompt('Input a new pin\nMUST CONTAIN BETWEEN 3 AND 6 CHARACTERS\n' +
			 'To cancel leave empty field');
		
		if(newPin.length >= 3 && newPin.length <= 6){
			setPinNumber(newPin);
			alert('PIN changed!');
			return;
		}

		if(newPin !== '')alert('Incorrect PIN input');
		else return;
	}
	while(newPin !== '');
}

function setOngoingProgram(channelNumber){
	let programsList = channels.filter(c => c.channelNumber == channelNumber);
	let currentTimePeriod = currentTime();

	for(let program of programsList){
		if(program.startTime <= currentTimePeriod && program.endTime > currentTimePeriod)
			return program;
	}
}

function SelectProgram(){

  let channelMenuChoice, programMenuChoice, currentProgram;

  do{

    channelMenuChoice = prompt(PrintChannels());
    if(channelMenuChoice === '')return;

    if(channels[channelMenuChoice - 1]){

			currentProgram = setOngoingProgram(channelMenuChoice);

			programMenuChoice = prompt(PrintPrograms(channelMenuChoice));
			if(programMenuChoice === '')return currentProgram;

			currentProgram = FindProgramByIndex(channelMenuChoice, programMenuChoice - 1);
			if(currentProgram)return currentProgram;
    }

	else alert('Chosen channel doesn\'t exsist!');
    
  }
  while(channelMenuChoice !== '');
}

function SelectProgramAction(currentProgram){
	let programAction;

	if(!currentProgram){
		alert('No program is currently selected');
		return;
	}

	if(!adultContentShield(currentProgram))return;

	while(programAction !== programActionChoice.Exit){

		programAction = parseInt(prompt(PrintProgramDetails(currentProgram) +
			'\n\n1 - Add/remove program to favourites\n2 - Rate program\n0 - Exit to main menu\n'));

		switch(programAction){

			case programActionChoice.Favourites:
				handleFavourites(currentProgram);
				break;
			case programActionChoice.Rate:
				rateProgram(currentProgram);
				break;
			case programActionChoice.Exit:
				alert('Returning to main menu');
				return;
			default:
				alert('Incorrect menu choice');
				break;
		}
	}
}

export {SelectProgram, SelectProgramAction, changePassword};
