import {mainMenuChoice} from './modules/passwordsAndEnums.js';
import {SelectProgram, SelectProgramAction, changePassword} from './modules/mainMenuHandler.js';

let menuChoice, currentProgram;

while (menuChoice !== 0) {
    menuChoice = parseInt(
        prompt(
            'Welcome, choose menu option:\n' +
                '1 - Change program\n' +
                '2 - View current program\n' +
                '3 - Change PIN number\n' +
                '0 - Exit application'));

    switch (menuChoice) {
        case mainMenuChoice.ChangeProgram:
            currentProgram = SelectProgram();
            break;
        case mainMenuChoice.ViewDetails:
            SelectProgramAction(currentProgram);
            break;
        case mainMenuChoice.Password:
            changePassword();
            break;
        case mainMenuChoice.Exit:
            alert('Application closing...')
            break;
        default:
            alert('Incorrect menu choice!');
            break;
    }
}