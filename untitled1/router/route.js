var express=require('express');
var routes= express.Router();
var controllers= require('../controllers');

//API player routes
routes.get('/api/animals',controllers.animalApiController.index);
routes.post('/api/animals',controllers.animalApiController.save);
routes.put('/api/animals/(:idAnimal)',controllers.animalApiController.update);
routes.delete('/api/animals/(:idAnimal)',controllers.animalApiController.delete);

module.exports=routes;
