
var playerModel= require('../models/playerModel');
var teamModel= require('../models/teamModel');

var teamController=function(){}

teamController.add = function(req, res, next) {
    teamModel.getAllTeam(function (err, users) {
        res.render('team/addteam', {title: 'Add team'});
    });
}


teamController.index=function(req,res,next){

    teamModel.getAllTeam(function(err,teams){
        if(err){
            throw err;
        }else{
            res.render('team/index',{title:'Team Listing',teams:teams});
        }

    });
}


teamController.save=function(req,res){
    console.log("DANS LE SAAAAVEEEE :   ");


    req.assert('nom', 'nom is required').notEmpty();
    req.assert('pays', 'pays is required').notEmpty();
    req.assert('stade', 'stade is required').notEmpty();

    var errors = req.validationErrors();
    var newTeam={
        nom:req.sanitize('nom').escape().trim(),
        pays:req.sanitize('pays').escape().trim(),
        stade:req.sanitize('stade').escape().trim()
    }
    teamModel.insertTeam(newTeam,function(err){


        res.redirect('/team');
    });



}
teamController.edit=function(req,res){
    var teamId=req.params.idTeam;
    console.log("FAUTEEE     :   "+teamId);
    teamModel.findTeamById(teamId,function(result){
        if(result==null){
            res.redirect('/team');
        }else{
                    res.render('team/editteam',{title: 'team ',team: result[0]});


        }
    })
}

teamController.update=function(req,res){
    console.log("DANS LE UPDATE :   "+teamId);
    var teamId=req.params.idTeam;

    req.assert('nom', 'nom is required').notEmpty();
    req.assert('pays', 'pays is required').notEmpty();
    req.assert('stade', 'stade is required').notEmpty();


        var newTeam = {
            nom: req.sanitize('nom').escape().trim(),
            pays: req.sanitize('pays').escape().trim(),
            stade: req.sanitize('stade').escape().trim()
        }
        teamModel.updateTeam(teamId,newTeam, function (result) {

            res.redirect('/team');
        });

}
teamController.delete=function(req,res){
    var teamId=req.params.idTeam;
    console.log("DELEEEETION :   "+teamId);
    teamModel.deleteTeam(teamId,function(result){
        if(result==null){
            res.redirect('/team');
        }else{
            res.redirect('/team');
        }
    })
}

module.exports=teamController;
