import { PrintPrograms, PrintChannels, FindProgramByIndex, PrintProgramDetails } from "./utils.js";
import {channels} from './tvPrograms.js'

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
	if(!currentProgram){
		alert('No program is currently selected');
		return;
	}

	let programAction = prompt(PrintProgramDetails(currentProgram));
}

export {SelectProgram, SelectProgramAction};