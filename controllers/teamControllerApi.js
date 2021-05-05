
var playerModel= require('../models/playerModel');
var teamModel= require('../models/teamModel');

var teamControllerApi=function(){}

teamControllerApi.add = function(req, res, next) {
    teamModel.getAllTeam(function (err, users) {
        res.status(200).json({'message':'success'});
    });
}


teamControllerApi.index=function(req,res,next){

    teamModel.getAllTeam(function(err,teams){
        if(err){
            throw err;
        }else{
            res.json({teams:teams});
        }

    });
}


teamControllerApi.save=function(req,res){
    console.log("DANS LE SAVEEE :   ");


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


        if(err){
            res.status(400).json({'error':err});
        }else{
            res.status(200).json({'message':'success'});
        }

});



}
teamControllerApi.edit=function(req,res){
    var teamId=req.params.idTeam;
    console.log("FAUTEEE     :   "+teamId);
    teamModel.findTeamById(teamId,function(result){
        if(result==null){
            res.json({'messge': 'Team updated succesfully '});
        } else {
            res.json({'message': 'Error with updating team '});
        }
    })
}

teamControllerApi.update=function(req,res){
    console.log("DANS LE UPDATE :   "+teamId);
    var teamId=req.params.idTeam;

    req.assert('nom', 'nom is required').notEmpty();
    req.assert('pays', 'pays is required').notEmpty();
    req.assert('stade', 'stade is required').notEmpty();
    var errors = req.validationErrors();

    if( !errors ) {
        var newTeam = {
            nom: req.sanitize('nom').escape().trim(),
            pays: req.sanitize('pays').escape().trim(),
            stade: req.sanitize('stade').escape().trim()
        }
        teamModel.updateTeam(teamId,newTeam, function (result) {
            if (result.affectedRows == 1) {
                res.json({'messge': 'Team updated succesfully '});
            } else {
                res.json({'message': 'Error with updating team '});
            }
        });

}
else{
    var err_msg="";
    errors.forEach(function(err){
        err_msg+=err.msg+"<br/>";
    })
    console.log("error"+err_msg);
    res.json({'message':'Error invalid data for team '});

    }
}
teamControllerApi.delete=function(req,res){
    var teamId=req.params.idTeam;
    console.log("DELEEEETION :   "+teamId);
    teamModel.deleteTeam(teamId,function(result){
        if(result==null){
            res.json({'message':'error for delete'});
        }else{
            res.redirect({'message':'Successsss your team is deleted'});
        }
    })
}

module.exports=teamControllerApi;
