 var sql= require('../db');

    var teamModel={

    }
    teamModel.getAllTeam=function(result){
        sql.query("SELECT team.idTeam,team.nom,team.pays,team.stade FROM team ",function(err,res){
            if(err) {
                return result(err,null);
            }
            else{
                return result(null,res);
            }
        });
    }
    teamModel.insertTeam=function(newTeam,result)
    {
        let stmt = "INSERT INTO team (nom,pays,stade) VALUES (?,?,?,?,?)";
        let tab = [newTeam.nom,newTeam.pays,newTeam.stade];
        sql.query(stmt,tab,function(err,res){
            if(err){
                console.log("ERREUR SQLLLLLL");
                return result(err,null);
            }else{
                return result(null,res);
            }
        });
    }
    teamModel.findTeamById=function(teamId,result){
        sql.query("SELECT * from animal WHERE idteam ="+teamId,function(err,rows){
            if(err)
                throw err;

            if (rows.length <= 0) {
                return result(err);
            }
            else {
                return result(rows);
            }
        })
    }

    teamModel.updateTeam=function(teamId,newTeam,result){

        console.log("ID TEAM :"+teamId);
        let stmt = "UPDATE  team SET nom = ? ,pays = ? ,stade = ? where idTeam ="+teamId;
        let tab = [newTeam.nom,newTeam.pays,newTeam.stade];
        sql.query(stmt,tab,function(err,rows){
            if(err)
                result(err);

            return result(rows);

        });
    }

  teamModel.deleteTeam=function(teamId,result){
        sql.query("DELETE FROM team WHERE idTeam="+teamId,function(err,rows){
            if(err)
                result(err);

            return result(rows);
        });
    }

    module.exports=teamModel;


