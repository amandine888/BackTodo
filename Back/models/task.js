const mongoose = require ('mongoose'); 

let taskSchema = new mongoose.Schema({
    nameTask: {
        type: 'string', 

        done: [{
            type: 'boolean', 
            default: false
        }],
        
        listId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'List'
        }
    }
}); 

module.exports = mongoose.model('Task', taskSchema);