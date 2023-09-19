/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import { writeFile, fs} from 'node:fs';
import qr from 'qr-image';


inquirer.prompt([
    {
        name: "userUrl",
        message: "Please enter the Url you want to convert to QR-image."
    }

]).then((answers) => {
    writeFile('userUrl.txt', answers.userUrl, (error) => {
        if(error) {
            throw error
        } else {
            const qr_image = qr.image(answers.userUrl, {type:"png"});
            qr_image.pipe(fs.createWriteStream("qr_image.png"));

        }      

    } )
    
}).catch((error) => {
    if (error.isTtyError) {
        console.log("Couldnt be rendered in the current Environment")
    } else {
        console.log("Something went wrong");
    }
})