import fs from 'fs';

async function getNode()
{
    let dataBuffer = fs.readFileSync('notesData.json');
    
        let data = dataBuffer.toString();
        let obj = JSON.parse(data);
        // console.log(obj);
        return obj;
}

 async function addNote(title, body)
{
    // console.log(title, body);
    let obj = await  getNode();

    let newData = {title, body};
    obj.push(newData);
    
    // var uploadData = [obj, newData];
    // console.log(JSON.parse(uploadData));
    let data = JSON.stringify(obj);
    fs.writeFile('notesData.json', data, (error)=> {
        if(error)
        {
            console.log(error);
        }
        else{
            console.log("done")
        }
    });
}

export default addNote;