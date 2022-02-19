const mainMenuChoice = {
  ChangeProgram: 1,
  ViewDetails: 2,
  Password: 3,
  Exit: 0,
};

const programActionChoice = {
  Favourites: 1,
  Rate: 2,
  Exit: 0
}

let adultContentPinNumber = '12345';

function setPinNumber(newPin){
  adultContentPinNumber = newPin;
}

export {mainMenuChoice, setPinNumber, adultContentPinNumber, programActionChoice};