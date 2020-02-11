// Déclarations des dépendances

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// Initialisation de la connexion a la base de données
mongoose.connect('mongodb://localhost/todoList', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Récuperation des models
let User = require('./models/user');
let List = require('./models/list'); 
let Task = require('./models/task')

// Déclarations des routes de notre application
app.route('/').get(function(req, res) {
    res.send('hello world !');
});

//Route register + requête : 
app.route ('/user').post(function(req, res){
    // User.create({function(err, data){}})
    const user = new User ({
        firstname:  req.body.firstname, 
        lastname:  req.body.lastname, 
        password: req.body.password, 
        email:  req.body.email,
        }); 
    user.save(function(err, data){
        if(err)
        res.send(err)
        else{
            res.send(data); 
        }
    }); 
    // res.send('Salut')
});

// Route connection : 
app.route('/user').get(function(req, res){
    res.send('Salut'),
    User.find({function(err, data){
        const user = new User
    }
    })
}); 

// Route créer une liste : 
app.route('/list').post(function(req, res){
    res.send('Une liste')
}); 

// Route mettre à jour une liste : 
app.route('/list').get(function(req, res){
    res.send('Une liste')
}); 

// Route supprimer une liste : 
app.route('/list').delete(function(req, res){
    res.send('Une liste')
}); 

// Route pour créer une tâche : 
app.route('/task').post(function(req, res){
    res.send('Une tâche')
}); 

// Route pour mettre à jour une tâche : 
app.route('/task').get(function(req, res){
    res.send('Une tâche')
}); 

// Route pour supprimer une tâche : 
app.route('/task').delete(function(req, res){
    res.send('Une tâche')
}); 

// Mise en écoute de notre application (sur le port 3000)
app.listen(3000);
