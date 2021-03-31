var express=require('express');
var routes= express.Router();
var controllers= require('./controllers');

//API player routes
routes.get('/playerController',controllers.playerController.index);
routes.get('/playerController/add',controllers.playerController.add);
routes.post('/playerController/add',controllers.playerController.save);
routes.get('/playerController/edit/(:idPlayer)',controllers.playerController.edit);
routes.get('/playerController/delete/(:idPlayer)',controllers.playerController.delete);
routes.post('/playerController/edit/(:idPlayer)',controllers.playerController.update);


module.exports=routes;
