
var playerModel= require('../models/playerModel');
var teamModel= require('../models/teamModel');

var playerController=function(){}

playerController.add = function(req, res, next) {
    playerModel.getAllPlayer(function (err, users) {
        res.render('player/addplayer', {title: 'Add Player'});
    });
}


playerController.index=function(req,res,next){
    playerModel.getAllPlayer(function(err,players){
        var cool;

        if(err){
            throw err;
        }else{
            res.render('player/index',{title:'Player Listing',players:players});
        }

    });
}


playerController.save=function(req,res){
    console.log("DANS LE SAAAAVEEEE :   ");
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


            res.redirect('/player');
        });



}




playerController.edit=function(req,res){
    var playerId=req.params.idPlayer;

    console.log("FAUTEEE     :   "+playerId);
    playerModel.findPlayerById(playerId,function(result){
        console.log(result[0]);
        if(result==null){
            res.redirect('/player');
        }else{
                    res.render('player/editplayer',{title: 'Edit player', player:result[0]});


        }
    })
}

playerController.update=function(req,res){
    console.log("DANS LE UPDATE :   "+playerId);
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
        playerModel.updatePlayer(playerId,newPlayer,function(result){



            if(err){
                console.log("error','There was error in inserting data");
            }else{
                console.log("success','player added succesfully'");
            }
            res.redirect('/player');
        });
    }else{
        var err_msg="";
        errors.forEach(function(err){
            err_msg+=err.msg+"<br/>";
        })
      console.log("error"+err_msg);
    }

    res.redirect('/player');
}
playerController.delete=function(req,res){
    var playerId=req.params.idPlayer;
    console.log("DELEEEETION :   "+playerId);
    playerModel.deletePlayer(playerId,function(result){
        if(result==null){
            res.redirect('/player');
        }else{
            res.redirect('/player');
        }
    })
}

module.exports=playerController;
