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
    }
}); 

module.exports = mongoose.model('List', listSchema);