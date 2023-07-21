const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager');


const data = mongoose.model('tasks', {
    description:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    }
})

const dat = new data({
    description: "Task 4",
    completed: false
});

dat.save().then(() =>{
    console.log(dat);
}).catch((error) => {
    console.log(error)
})