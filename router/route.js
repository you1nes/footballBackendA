var express=require('express');
var routes= express.Router();
var controllers= require('./controllers');

//API player routes
routes.get('/player',controllers.playerController.index);
routes.get('/player/add',controllers.playerController.add);
routes.post('/player/add',controllers.playerController.save);
routes.get('/player/edit/(:idPlayer)',controllers.playerController.edit);
routes.get('/player/delete/(:idPlayer)',controllers.playerController.delete);
routes.post('/player/edit/(:idPlayer)',controllers.playerController.update);


module.exports=routes;
