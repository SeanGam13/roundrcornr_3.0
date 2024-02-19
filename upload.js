const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

//add drive scope will grant full access to the drive account
const KEYFILEPATH = 'C:/Users/USER/Desktop/roundrcornr_3.0/assests/credentials/credentials.json';

const SCOPES = ['https://www.googleapis.com/auth/drive'];
//init the auth with the required scopes
const auth new google.auth.GoogleAuth(opts: {
    keyFile: KEYFILEPATH,
    scopes: SCOPES
})

async function createAndUploadFile(auth) {
    const driveService = google.drive(options: { version: 'v3', auth });


    let fileMetadata = {
        name: 'test.txt',
        parents: ['1n6Vj4k6n2fV1m7OZ9Ez1YwQXWz5pDn5']
    };

    let media = {
        mimeType: 'text/plain',
        body: fs.createReadStream('test.txt')
    };