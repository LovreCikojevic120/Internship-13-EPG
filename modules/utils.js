import {channels} from './tvPrograms.js';


function PrintProgramDetails(currentProgram){
	let favouritesList = JSON.parse(localStorage.getItem('favourites'));
	let ratingsList = JSON.parse(localStorage.getItem('ratings'));
	result = '';

	result += `Current program:
		${currentProgram.channelName}
		${currentProgram.programName}
		${currentProgram.category}`;

	if(favouritesList.find(p=>p.programName === currentProgram.programName))
		result += '\nIn favourites';

	if(ratingsList.find(p=>p.programName === currentProgram.programName))
		result += `\nRating: ${currentProgram.rating}`;

	return result;
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