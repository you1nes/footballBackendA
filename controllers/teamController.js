
var playerModel= require('../models/playerModel');
var teamModel= require('../models/teamModel');

var teamController=function(){}

teamController.add = function(req, res, next) {
    teamModel.getAllTeam(function (err, users) {
        res.render('team/add', {title: 'Add team'});
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

    req.flash('error', err_msg);
    res.redirect('/team/save/'+teamId);



}
teamController.edit=function(req,res){
    var teamId=req.params.idTeam;
    console.log("FAUTEEE     :   "+teamId);
    teamModel.findTeamById(teamId,function(result){
        if(result==null){
            req.flash('error','Sorry the team doesnot exists!!');
            res.redirect('/team');
        }else{
                    res.render('team/edit',{title: 'team '});


        }
    })
}

teamController.update=function(req,res){
    console.log("DANS LE UPDATE :   "+teamId);
    var teamId=req.params.idTeam;

    req.assert('nom', 'nom is required').notEmpty();
    req.assert('pays', 'pays is required').notEmpty();
    req.assert('stade', 'stade is required').notEmpty();

        req.flash('error', err_msg);
        res.redirect('/team/edit/'+teamId);

}
teamController.delete=function(req,res){
    var teamId=req.params.idTeam;
    console.log("DELEEEETION :   "+teamId);
    teamModel.deleteTeam(teamId,function(result){
        if(result==null){
            req.flash('error','Sorry the team cannot be deleted !!');
            res.redirect('/team');
        }else{
            req.flash('success', 'team Information deleted successfully.');
            res.redirect('/team');
        }
    })
}

module.exports=teamController;
