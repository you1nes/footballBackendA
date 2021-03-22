let express = require ('express');
let router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

var tasks = [
    'Buy milk',
    'learn javascript',
    'learn express'
];

router.post('/addtask', urlencodedParser, function (req, res) {
    const newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect('/');
});

router.post('/removetask', urlencodedParser, function (req, res) {
    const completedTasks = req.body.completedTasks;

    // Si c'est une liste, alors on souhaite supprimer plusieurs taches simulatenement
    if (completedTasks instanceof Array) {
        for (const completedTask of completedTasks) {
            const index = tasks.indexOf(completedTask);
            // Si l'index > -1, l'élément existe bel et bien dans la liste
            // J'utilise la méthode slice pour supprimer à partir de l'index, 1 seul élement
            if (index > -1) tasks.splice(index, 1);
        }
    } else {
        const index = tasks.indexOf(completedTasks);
        if (index > -1) tasks.splice(index, 1);
    }

    res.redirect('/');
});

router.get('/', (req, res) => res.render('todo.ejs', {tasks: tasks}));

module.exports=router;
