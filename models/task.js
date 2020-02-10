const mongoose = require ('mongoose'); 

let taskSchema = new mongoose.Schema({
    nameTask: {
        type: 'string', 
    }
}); 

module.exports = mongoose.model('Task', taskSchema);