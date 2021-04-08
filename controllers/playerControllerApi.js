
var playerModel= require('../models/playerModel');
var teamModel= require('../models/teamModel');

var playerControllerApi=function(){}

playerControllerApi.add = function(req, res, next) {

        playerModel.getAllPlayer(function (err, users) {
            res.status(200).json({'message':'success'});

    });
}


playerControllerApi.index=function(req,res,next){
    playerModel.getAllPlayer(function (err, players) {
        if(err){
            throw err;
        }else{
            res.json({players:players});
        }
    });
}


playerControllerApi.save=function(req,res){
    console.log("SAVEE :   ");
    console.log(req.body);

    req.assert('prenom', 'prenom is required').notEmpty();
    req.assert('nom', 'nom is required').notEmpty();
    req.assert('age', 'age is required').notEmpty();
    req.assert('nationality', 'nationality is required').notEmpty();
    req.assert('image', 'image is required').notEmpty();
    req.assert('idTeam', 'Team is required').notEmpty();

    var errors = req.validationErrors();
        var newPlayer={
            nom:req.sanitize('nom').escape().trim(),
            prenom:req.sanitize('prenom').escape().trim(),
            age:req.sanitize('age').escape().trim(),
            nationality:req.sanitize('nationality').escape().trim(),
            image:req.sanitize('image').escape().trim(),
            idTeam:req.sanitize('idTeam').escape().trim()
        }
        console.log("age player:"+newPlayer.age);
        playerModel.insertPlayer(newPlayer,function(err){


            if(err){
                res.status(400).json({'error':err});
            }else{
                res.status(200).json({'message':'success'});
            }
            res.json({'message':'successssss!!!'});
        });



}




playerControllerApi.edit=function(req,res){
    var playerId=req.params.idPlayer;

    console.log("FAUTEEE     :   "+playerId);
    playerModel.findPlayerById(playerId,function(result){
        console.log(result[0]);
        if(result==null){
            res.json({'messge': 'player updated succesfully '});
        } else {
            res.json({'message': 'Error with updating player '});
        }
    })
}

playerControllerApi.update=function(req,res){
    console.log("UPDATE :   "+playerId);
    var playerId=req.params.idPlayer;
    req.assert('prenom', 'prenom is required').notEmpty();
    req.assert('nom', 'nom is required').notEmpty();
    req.assert('nationality', 'nationality is required').notEmpty();
    req.assert('image', 'image is required').notEmpty();
    req.assert('idTeam', 'Team is required').notEmpty();



    var errors = req.validationErrors();
    if( !errors ) {
        var newPlayer={
            nom:req.sanitize('nom').escape().trim(),
            prenom:req.sanitize('prenom').escape().trim(),
            age:req.sanitize('age').escape().trim(),
            nationality:req.sanitize('nationality').escape().trim(),
            image:req.sanitize('image').escape().trim(),
            idTeam:req.sanitize('idTeam').escape().trim()
        }
        console.log("age player:"+newPlayer.age);
        playerModel.updatePlayer(playerId,newPlayer,function(result) {

            if (result.affectedRows == 1) {
                res.json({'messge': 'player updated succesfully '});
            } else {
                res.json({'message': 'Error with updating player '});
            }
        });

    }else{
        var err_msg="";
        errors.forEach(function(err){
            err_msg+=err.msg+"<br/>";
        })
      console.log("error"+err_msg);
        res.json({'message':'Error invalid data for player ;-('});

    }
}
playerControllerApi.delete=function(req,res){
    var playerId=req.params.idPlayer;
    console.log("DELEEEETION :   "+playerId);
    playerModel.deletePlayer(playerId,function(result){
        if(result==null){
            res.json({'message':'error for delete'});
        }else{
            res.redirect({'message':'Successsss your player is deleted'});
        }
    })
}

module.exports=playerControllerApi;
