// Déclarations des dépendances : 

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'), 
    jwt = require('jsonwebtoken'),
    app = express();

// parse application/x-www-form-urlencoded : 
app.use(bodyParser.urlencoded({ extended: false }));


// Initialisation de la connexion a la base de données : 
mongoose.connect('mongodb://localhost/todoList', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Récuperation des models : 
let User = require('./models/user');
let List = require('./models/list'); 
let Task = require('./models/task')

// Déclarations des routes de notre application : 
app.route('/').get(function(req, res) {
    res.send('hello world !');
});

// Route register + requête : 
app.route ('/register').post(function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let user = new User ({
            firstname:  req.body.firstname, 
            lastname:  req.body.lastname, 
            password: hash, 
            email:  req.body.email, 
            listId: req.body['listId[]']
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

// Route connexion + requête : 
app.route('/connexion').post(function(req, res){
    User.findOne({email: req.body.email}, function(err, data){
        if (data){
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if (result){
                    let token = jwt.sign({id: data._id}, "maclefsecrete");  //pas de données sensibles dans le token, voir jws sinon
                    let response = {user: data, token: token}; 
                    res.send(response);
                }
                else
                    res.send('error : ' + err);
                }); 
        } 
        else 
            res.send(err);
    }); 
});

// Route admin + requête : 
app.route('adminanduser').post(function(req, res){
})

// Route user + requête : 
app.route('adminanduser').post(function(req, res){
})

// Route pour trouver tous les users + requête : 
app.route('/users').get(function(req, res){
    User.find({}, function(err, data){
        res.send(data); 
    }); 
}); 

// Route pour mettre à jour l'user + requête : 
app.route('/userupdate').put(function(req, res){
    User.updateOne({ _id: req.body.id }, { $set: { firstname: req.body.firstname } }, function(err, data){
        if(err)
        res.send(err)
        else{
            res.send(data); 
        };
    });
    }); 

// Route pour supprimer l'user + requête : 
app.route('/deleteuser').delete(function(req, res){
    User.deleteOne({_id: req.body.id}, function(err, data){
        if(err)
        res.send(err)
        else{
            res.send(data); 
        };
    })
}); 

// Route créer une liste + requête : 
app.route('/newlist').post(function(req, res){
    jwt.verify(req.headers["x-access-token"],"maclefsecrete", function(err, decoded){
        if (err)
            res.send(err)
        else{
            let list = new List({
                namelist: req.body.namelist,
                userId: [decoded.id]
            })
            list.save(function(err, data){
                if(err)
                    res.send(err)
                else{
                    res.send(data)
                }; 
            }); 
            // res.send('Une liste')
        }
    }); 
}); 

// Route pour trouver toutes les listes + requête : 
app.route('/findlist').get(function(req, res){
    List.find({}, function(err, data){
        res.send(data); 
    }); 
}); 

// // Route pour chercher un user dans une liste + requête (recherche par id) : 
// app.route('/listbyid/:id').get(function(req, res){
//     List.findOne({_id: req.params.id}).populate('user').exec(function(err, data){
//         if (err)
//             res.send(err)
//         else{
//             res.send(data)
//         }; 
//     });
// }); 

// Route pour chercher une liste dans un user + requête (recherche par id) : 
app.route('/userbyid/:id').get(function(req, res){
    User.findOne({_id: req.params.id}).populate('list').exec(function(err, data){
        if (err)
            res.send(err)
        else{
            res.send(data)
    }; 
    }); 
}); 

// Route pour mettre à jour une liste + requête :  
app.route('/listupdate').put(function(req, res){
    List.updateOne({_id: req.body.id}, {$set: { namelist: req.body.namelist} }, function(err, data){
        if(err)
            res.send(err)
        else{
            res.send(data); 
        };
    })
}); 

// Route supprimer une liste + requête : 
app.route('/deletelist').delete(function(req, res){
    List.deleteOne({_id: req.body.id}, function(err, data){
        if(err)
        res.send(err)
        else{
            res.send(data); 
        };
    })
}); 

// Route pour créer une tâche + requête : 
app.route('/createtask').post(function(req, res){
    let task = new Task({ 
        nametask: req.body.nametask, 
        listId: req.body['listId[]'],
    })
    task.save(function(err, data){
        if(err)
            res.send(err)
        else{
            res.send(data)
        }; 
    }); 
}); 

// Route pour chercher toutes les tâches + requête : 
app.route('/findtask').get(function(req, res){
    Task.find({}, function(err, data){
        res.send(data); 
    }); 
}); 

// Route pour trouver une list dans tâche + requête (recherche par id) : 
app.route('/taskbyid/:id').get(function(req, res){
    Task.findOne({_id: req.params.id}).populate('List').exec(function(err, data){
        if (err)
            res.send(err)
        else{
            res.send(data)
    }; 
    }); 
}); 


// Route pour mettre à jour une tâche + requête : 
app.route('/updatetask').put(function(req, res){
    Task.updateOne({_id: req.body.id}, {$set: { nametask: req.body.nametask} }, function(err, data){
        if(err)
        res.send(err)
        else{
            res.send(data); 
        };
    })
}); 

// Route pour supprimer une tâche + requête : 
app.route('/deletetask').delete(function(req, res){
    Task.deleteOne({_id: req.body.id}, function(err, data){
        if(err)
        res.send(err)
        else{
            res.send(data); 
        };
    })
}); 

// Mise en écoute de notre application (sur le port 3000)
app.listen(3000);
