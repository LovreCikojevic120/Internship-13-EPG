import {channels} from './tvPrograms.js';


function PrintProgramDetails(currentProgram){
	return `Current program:
		${currentProgram.channelName}
		${currentProgram.programName}
		${currentProgram.category}`;
}

function FindProgramByIndex(channelIndex, programIndex){
	let channel = channels.filter(c => c.channelNumber == channelIndex);

	if(channel[programIndex])
		return channel[programIndex];

	alert('Selected program doesn\'t exsist');
}

function PrintPrograms(channelNumber){

  let counter = 1;
  let programs = channels.filter(channel => channel.channelNumber == channelNumber);

  let programList = PrintChannels(channelNumber);
  
  programList += '==========\nPrograms\n==========\n';
  programs.forEach(program => programList += `${counter++} - ${program.programName}\n`);
  return programList;
}

function PrintChannels(chosenChannel){

  let channelList = '==========\nChannels\n==========\n';

  channels.forEach(channel => {
	if(channel.channelNumber == chosenChannel)
		channelList += '--> ';

	channelList += `${channel.channelNumber} - ${channel.channelName}\n`;
  });

  return channelList;
}

export {PrintPrograms, PrintChannels, FindProgramByIndex, PrintProgramDetails};