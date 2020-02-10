const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstname: {
        type: 'string',
        required: 'You need to specify a name'
    },

    lastname: {
        type: 'string', 
        require: 'You need to specify a lastname'
    },

    email: {
        type: 'string',
        required: 'You need to specify an email',
        unique: true
    },
    password: {
        type: 'string',
        required: 'You need to specify a password'
    }
});

module.exports = mongoose.model('User', userSchema);
