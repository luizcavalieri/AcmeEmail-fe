import { browser } from 'protractor';
// at the top of the test spec:
const fs = require('fs');

export class LoginPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitle() {
        // within a test:
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'tmp/login_page.png');
        });

        return browser.getTitle();
    }
}


// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    let stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}