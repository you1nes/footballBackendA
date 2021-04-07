var express=require('express');
var routes= express.Router();

var playerController = require("../controllers/playerController");
var teamController = require("../controllers/teamController");


//API player routes
routes.get('/player',playerController.index);

routes.get('/player/add',playerController.add);
routes.post('/player/add',playerController.save);
routes.get('/player/edit/(:idPlayer)',playerController.edit);
routes.get('/player/delete/(:idPlayer)',playerController.delete);
routes.post('/player/update/(:idPlayer)',playerController.update);


//API team routes
routes.get('/team',teamController.index);

routes.get('/team/add',teamController.add);
routes.post('/team/add',teamController.save);
routes.get('/team/edit/(:idTeam)',teamController.edit);
routes.get('/team/delete/(:idTeam)',teamController.delete);
routes.post('/team/update/(:idTeam)',teamController.update);


module.exports=routes;
