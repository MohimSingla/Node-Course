import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'
import addNote from './notesApi.js'

yargs(hideBin(process.argv)).command({
    command: "add",
    handler: function (data) {
        addNote(data.title, data.body);
    },
    builder: {
        title: {
            demandOption: true,
            type: "string"
        },
        body: {
            demandOption: true,
            type: "string"
        }
    }
}).argv;
