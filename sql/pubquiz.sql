# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.27)
# Database: pubquiz
# Generation Time: 2013-08-21 05:44:32 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` tinytext,
  `slug` tinytext,
  `date_created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `name`, `slug`, `date_created`, `date_updated`)
VALUES
	(1,'Music','music','2013-08-19 18:51:08','2013-08-19 00:00:00'),
	(2,'Sport','sport','2013-08-19 18:51:08','2013-08-19 00:00:00'),
	(3,'Geography','geography','2013-08-19 18:51:08','2013-08-19 00:00:00'),
	(4,'History','history','2013-08-19 18:51:08','2013-08-19 00:00:00');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table categories_questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories_questions`;

CREATE TABLE `categories_questions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `categories_id` int(11) DEFAULT NULL,
  `questions_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `categories_questions` WRITE;
/*!40000 ALTER TABLE `categories_questions` DISABLE KEYS */;

INSERT INTO `categories_questions` (`id`, `categories_id`, `questions_id`)
VALUES
	(1,2,1),
	(2,2,2),
	(3,2,3),
	(4,2,4),
	(5,2,5),
	(6,3,6),
	(7,3,7),
	(8,3,8),
	(9,3,9),
	(10,3,10),
	(11,4,11),
	(12,4,12),
	(13,4,13),
	(14,4,14),
	(15,4,15),
	(16,1,16),
	(17,1,17),
	(18,1,18),
	(19,1,19),
	(20,1,20);

/*!40000 ALTER TABLE `categories_questions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `question` text,
  `answer` tinyint(1) DEFAULT NULL,
  `date_created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;

INSERT INTO `questions` (`id`, `question`, `answer`, `date_created`, `date_updated`)
VALUES
	(1,'Moe Farah holds the Olympic World Record for the 5000m mens running?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(2,'Tiger Woods has the lowest career scoring average in PGA Tour history?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(3,'Sir Chris Hoy is Great Britain\'s highest Olympic medal winner?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(4,'An orange card is awarded for a fowl in football?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(5,'Cricket has a referee?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(6,'Cartography is the study and the construction of maps?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(7,'Central America is located on the South American continent?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(8,'A cape is a point of land extending into a  body of water?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(9,'Spain and Portugal are found on the Iberian Peninsula in Europe?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(10,'Latitude is measured east and west of the prime meridian?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(11,'In 1914, a Turkish nationalist shot the heir to the Russian throne, Archduke Ferdinand?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(12,'The British won the decisive victory against the Zulu at the battle of Isandhlwana?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(13,'In the 1620s, the Dutch were content to become the vassals of the kingdom of Java?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(14,'By 1830 all of Spanish South America had gained its independence?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(15,'By raising wages and lowering prices, the devastation of the Black Death ultimately helped expand European trade?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(16,'Spandau Ballet got their name from a piece of graffiti on a Berlin toilet wall?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(17,'Michael Jackson’s 1988 hit Dirty Diana is about our own Princess Di?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(18,'Madonna has Marilyn Monroe’s face tattooed on her behind?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(19,'George Michael owns the piano on which John Lennon wrote Imagine?',1,'2013-08-19 00:00:00','2013-08-19 00:00:00'),
	(20,'Paul McCartney died in the mid-60s and was replaced by a lookalike?',0,'2013-08-19 00:00:00','2013-08-19 00:00:00');

/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table scores
# ------------------------------------------------------------

DROP TABLE IF EXISTS `scores`;

CREATE TABLE `scores` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `score` int(11) DEFAULT NULL,
  `date_created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
