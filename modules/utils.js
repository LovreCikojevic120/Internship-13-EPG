import {channels} from './tvPrograms.js';

function calculateDate(hours, minutes){
	let today = new Date();
	return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
}

function currentTime(){
	let today = new Date();
	return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 
		today.getHours(), today.getMinutes());
}

function PrintProgramDetails(currentProgram){
	let favouritesList = JSON.parse(localStorage.getItem('favourites'));
	let ratingsList = JSON.parse(localStorage.getItem('ratings'));
	let result = '', currentProgramRating;

	result += `Current program:
		${currentProgram.channelName}
		${currentProgram.programName}
		${currentProgram.category}`;

	if(favouritesList && favouritesList.find(p => p.programName === currentProgram.programName))
		result += '\nIn favourites';

	if(ratingsList){
		currentProgramRating = ratingsList.find(p => p.programName === currentProgram.programName);

		if(currentProgramRating)
			result += `\nRating: ${currentProgramRating.rating}`;
	}

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
  	let uniqueChannelNames = [...new Map(channels.map((item) => 
		[item["channelName"], item])).values()];

	uniqueChannelNames.forEach(u => {
		if(u.channelNumber == chosenChannel)
			channelList += '-> ';

		channelList += `${u.channelNumber} - ${u.channelName}\n`
	});
	
  	return channelList;
}

export {PrintPrograms, PrintChannels, FindProgramByIndex, PrintProgramDetails, calculateDate, currentTime};