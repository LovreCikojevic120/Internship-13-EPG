import { PrintPrograms, PrintChannels, FindProgramByIndex, PrintProgramDetails } from "./utils.js";
import { channels } from './tvPrograms.js'
import {adultContentShield, handleFavourites} from './tvProgramsHandler.js';
import {programActionChoice} from './constantsAndEnums.js';

function SelectProgram(){

  let channelMenuChoice, programMenuChoice, currentProgram;

  do{

    channelMenuChoice = prompt(PrintChannels());
    if(channelMenuChoice === '')return;

    if(channels[channelMenuChoice - 1]){

		programMenuChoice = prompt(PrintPrograms(channelMenuChoice));
		currentProgram = FindProgramByIndex(channelMenuChoice, programMenuChoice - 1);

		if(currentProgram)return currentProgram;
    }

	else alert('Chosen program doesn\'t exsist!');
    
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
			'\n\n1 - Add program to favourites\n2 - Rate program\n0 - Exit to main menu\n'));

		switch(programAction){

			case programActionChoice.Favourites:
				handleFavourites(currentProgram);
				break;
			case programActionChoice.Rate:
				programRater(currentProgram);
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

export {SelectProgram, SelectProgramAction};