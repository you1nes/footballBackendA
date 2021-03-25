Skip to content
Search or jump to…

you1nes/mydb.sql


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: footdb
--

-- --------------------------------------------------------

--
-- Table structure for table team
--

CREATE TABLE team (
  idTeam int(11) NOT NULL,
  nom varchar(100) NOT NULL,
  pays varchar(100)  NOT NULL,
  stade varchar(100)  NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table team
--

INSERT INTO team (idTeam, nom, pays, stade) VALUES
(1, 'psg', 'France', 'Parc des princes'),
(2, 'real Madrid', 'Espagne', 'Santiago-Bernabéu'),
(3, 'standart', 'Belgique', 'Maurice Dufrasne'),
(4, 'fc barcelone', 'Espagne', 'Camp Nou'),


-- --------------------------------------------------------

--
-- Table structure for table player
--

CREATE TABLE player (

        idPlayer int(11) NOT NULL,
        nom varchar(100) NOT NULL,
        prenom varchar(100) NOT NULL, String,
        age: int(11) NOT NULL,
        nationality varchar(100) NOT NULL,
        image varchar(100) NOT NULL,
        idTeam:int(11) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table regne
--

INSERT INTO player (idPlayer,nom,prenom ,age ,nationality,image,idTeam ) VALUES
(1, 'Van marsenile', 'Alix ',23, 'Espagne','',3),
(2, 'Decastenax', 'Jean ',26, 'France','',2),
(3, 'Milanio', 'Francesco ',21, 'Italie','',1),
(4, 'Del sol', 'Murino ',20, 'Portugal','',4),
(5, 'Amine', 'Yacine',19, 'Maroc','',2),
(6, 'Hafid', 'Zayn ',23, 'Maroc','',3);

-- --------------------------------------------------------

--
-- Table structure for table utilisateur
--

ALTER TABLE team
  ADD PRIMARY KEY (idTeam);


ALTER TABLE player
  ADD PRIMARY KEY (idPlayer);

--
-- AUTO_INCREMENT for table team
--
ALTER TABLE team
  MODIFY idTeam int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table player
--
ALTER TABLE player
  MODIFY idPlayer int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;



--
-- FOREIGN_KEYS for table player
--

ALTER TABLE player ADD CONSTRAINT fk_teamId FOREIGN KEY player(teamPlayer) REFERENCES team(idPlayer);

COMMIT;

