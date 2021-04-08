var express=require('express');
var routes= express.Router();

var playerController = require("../controllers/playerController");
var teamController = require("../controllers/teamController");
var playerControllerApi = require("../controllers/playerControllerApi");
var teamControllerApi = require("../controllers/teamControllerApi");

// player routes
routes.get('/player',playerController.index);

routes.get('/player/add',playerController.add);
routes.post('/player/add',playerController.save);
routes.get('/player/edit/(:idPlayer)',playerController.edit);
routes.get('/player/delete/(:idPlayer)',playerController.delete);
routes.post('/player/update/(:idPlayer)',playerController.update);


// team routes
routes.get('/team',teamController.index);

routes.get('/team/add',teamController.add);
routes.post('/team/add',teamController.save);
routes.get('/team/edit/(:idTeam)',teamController.edit);
routes.get('/team/delete/(:idTeam)',teamController.delete);
routes.post('/team/update/(:idTeam)',teamController.update);


// API player routes

routes.get('/api/players',playerControllerApi.index);
routes.post('/api/players',playerControllerApi.save);
routes.put('/api/players/(:idPlayer)',playerControllerApi.update);
routes.delete('/api/animals/(:idPlayer)',playerControllerApi.delete);

// API Team routes

routes.get('/api/teams',teamControllerApi.index);
routes.post('/api/teams',teamControllerApi.save);
routes.put('/api/teams/(:idTeam)',teamControllerApi.update);
routes.delete('/api/teams/(:idTeam)',teamControllerApi.delete);


module.exports=routes;
