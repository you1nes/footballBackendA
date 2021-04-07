 var sql= require('../db');

 var playerModel={

        }
        playerModel.getAllPlayer=function(result){
                sql.query("SELECT player.idPlayer,player.nom,player.prenom,player.age,player.nationality,player.image,player.idTeam FROM player",function(err,res){
                        if(err) {
                                return result(err,null);
                        }
                        else{
                                return result(null,res);
                        }
                });
        }
        playerModel.insertPlayer=function(newPlayer,result)
        {
                let stmt = "INSERT INTO player (nom,prenom,age,nationality,image,idTeam) VALUES (?,?,?,?,?,?)";
                let tab = [newPlayer.nom,newPlayer.prenom,newPlayer.age,newPlayer.nationality,newPlayer.image,newPlayer.idTeam];
                sql.query(stmt,tab,function(err,res){
                        if(err){
                                console.log("ERREUR SQLLLLLL");
                                return result(err,null);
                        }else{
                                return result(null,res);
                        }
                });
        }
        playerModel.findPlayerById=function(playerId,result){
                sql.query("SELECT * from player WHERE idplayer ="+playerId,function(err,rows){
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

        playerModel.updatePlayer=function(playerId,newPlayer,result){

                console.log("ID PLAYER :"+playerId);
                let stmt = "UPDATE  player SET prenom = ? ,nom = ? ,age = ?,nationality = ?,image = ?,idTeam = ? where idPlayer ="+playerId;
                let tab = [newPlayer.nom,newPlayer.prenom,newPlayer.age,newPlayer.nationality,newPlayer.image,newPlayer.idTeam];
                sql.query(stmt,tab,function(err,rows){

                });
        }

        playerModel.deletePlayer=function(playerId,result){
                sql.query("DELETE FROM player WHERE idPlayer="+playerId,function(err,rows){
                        if(err)
                                result(err);

                        return result(rows);
                });
        }

        module.exports=playerModel;


