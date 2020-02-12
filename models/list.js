const mongoose = require ('mongoose'); 

let listSchema = new mongoose.Schema({
    // userId: {
    //     type: 'string',
    // },

    // tacheId: {
    //     type: 'string', 
    // }, 

    namelist: {
        type: 'string', 
    },

    date: {
        type: 'date', 
        default: Date.now, 
    },

    userId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }], 

    taskId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Task'
    }
}); 

module.exports = mongoose.model('List', listSchema);