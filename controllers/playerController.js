
var playerModel= require('../models/playerModel');
var teamModel= require('../models/teamModel');

var playerController=function(){}

playerController.add = function(req, res, next) {
    playerModel.getAllPlayer(function (err, users) {
        res.render('player/add', {title: 'Add Player'});
    });
}


playerController.index=function(req,res,next){

    playerModel.getAllPlayer(function(err,players){
        if(err){
            throw err;
        }else{
            res.render('player/index',{title:'Player Listing',players:players});
        }

    });
}


playerController.save=function(req,res){
    console.log("DANS LE SAAAAVEEEE :   ");

    req.assert('prenom', 'prenom is required').notEmpty();
    req.assert('nom', 'nom is required').notEmpty();
    req.assert('nationality', 'nationality is required').notEmpty();
    req.assert('image', 'image is required').notEmpty();
    req.assert('idTeam', 'Team is required').notEmpty();

    req.flash('error', err_msg);
    res.redirect('/player/save/'+playerId);



}
playerController.edit=function(req,res){
    var playerId=req.params.idPlayer;
    console.log("FAUTEEE     :   "+playerId);
    playerModel.findPlayerById(playerId,function(result){
        if(result==null){
            req.flash('error','Sorry the player doesnot exists!!');
            res.redirect('/player');
        }else{
                    res.render('player/edit',{title: 'Edit player'});


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

        req.flash('error', err_msg);
        res.redirect('/player/edit/'+playerId);

}
playerController.delete=function(req,res){
    var playerId=req.params.idPlayer;
    console.log("DELEEEETION :   "+playerId);
    playerModel.deletePlayer(playerId,function(result){
        if(result==null){
            req.flash('error','Sorry the player cannot be deleted !!');
            res.redirect('/player');
        }else{
            req.flash('success', 'Player Information deleted successfully.');
            res.redirect('/player');
        }
    })
}

module.exports=playerController;
