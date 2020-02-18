const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstname: {
        type: 'string',
        required: 'You need to specify a name'
    },

    lastname: {
        type: 'string', 
        required: 'You need to specify a lastname'
    },

    role: {
        type: 'number',
        enum: [1, 2],
        // required: 'You need to specify', 
        default: 1, 
    },

    email: {
        type: 'string',
        required: 'You need to specify an email',
        unique: true
    },
    password: {
        type: 'string',
        required: 'You need to specify a password'
    }, 

    listId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'List'
    }]
});

module.exports = mongoose.model('User', userSchema);
