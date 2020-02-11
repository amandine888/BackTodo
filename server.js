// Déclarations des dépendances

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'), 
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
app.route ('/register').post(function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let user = new User ({
            firstname:  req.body.firstname, 
            lastname:  req.body.lastname, 
            password: hash, 
            email:  req.body.email,
            }); 
        user.save(function(err, data){
            if(err)
            res.send(err)
            else{
                res.send(data); 
            }
        }); 
    }); 
    // res.send('Salut')
});

// Route connexion : 
app.route('/connexion').post(function(req, res){
    // res.send('Salut'),
    User.find({email: req.body.email}, function(err, data){
        if (data){
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if (result)
                res.send(data);
            else
                res.send('error : ' + err);
            }); 
        }; 
    }); 
});

// Route créer une liste : 
app.route('/newlist').post(function(req, res){
    let list = new List({
        namelist: req.body.namelist, 
    })
    list.save(function(err, data){
        if(err)
            req.send(err)
        else{
            res.send(data)
        }; 
    }); 
    // res.send('Une liste')
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
