import mainMenuChoice from './modules.menuChoices.js'

let menuChoice;

while (menuChoice !== 0) {
    menuChoice = parseInt(
        prompt(
            'Welcome, choose menu option:\n' +
                '1 - Change program\n' +
                '2 - View program details\n' +
                '3 - Add/remove channel to/from favourites\n' +
                '4 - Rate program\n' +
                '0 - Exit application'));

    switch (menuChoice) {
        case mainMenuChoice.ChangeProgram:
            alert('aaaa');//ChangeProgram();
            break;
        case mainMenuChoice.ViewDetails:
          alert('bbbb');//ViewProgramDetails();
            break;
        case mainMenuChoice.Favourites:
            HandleFavourites();
            break;
        case mainMenuChoice.RateProgram:
            RateProgram();
            break;
        case mainMenuChoice.Exit:
            alert('Application closing...')
            break;
        default:
            alert('Incorrect menu choice!');
            break;
    }
}