const mongoose = require ('mongoose'); 

let listSchema = new mongoose.Schema({
    // userId: {
    //     type: 'string',
    // },

    // tacheId: {
    //     type: 'string', 
    // }, 

    nameList: {
        type: 'string', 
    },

    date: {
        type: 'date', 
        default: 'Date.now', 
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    }, 

    taskId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'task'
    }
}); 

module.exports = mongoose.model('List', listSchema);