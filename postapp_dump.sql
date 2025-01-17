-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: postapp
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `content` text,
  `likes` int DEFAULT '0',
  `comments` json DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'ajith','Post an post',14,'[\"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"wk\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"conditton\\\"}\", \"{\\\"username\\\":\\\"deepan\\\",\\\"comment\\\":\\\"ewr\\\"}\", \"{\\\"username\\\":\\\"deepan\\\",\\\"comment\\\":\\\"kwj\\\"}\", \"{\\\"username\\\":\\\"rish\\\",\\\"comment\\\":\\\"look\'s good\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"7668094457\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"We collaborate with early-stage investors and work with founders in their portfolios. Our solution offers investors a lean and cost-effective way to help founders validate and derisk the opportunity and provide the best value for the money they invest.\\\"}\"]','/uploads/1737030684556.webp'),(2,'praveen','instagram',5,'[\"{\\\"username\\\":\\\"deepan\\\",\\\"comment\\\":\\\"we\\\"}\"]','/uploads/1737030768705.png'),(3,'deepan','iphone x20',8,'[\"{\\\"username\\\":\\\"deepan\\\",\\\"comment\\\":\\\"hii\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"dfrg\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"wdf\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"qew\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"hii\\\"}\"]','/uploads/1737030925268.jpg'),(4,'praveen','Make more post.',3,'[\"{\\\"username\\\":\\\"deepan\\\",\\\"comment\\\":\\\"hii\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"to say what you think or feel about something.\\\"}\"]','/uploads/1737031313716.jpg'),(5,'rishh','sale on',3,'[\"{\\\"username\\\":\\\"deepan\\\",\\\"comment\\\":\\\"k\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"offer for ?\\\"}\", \"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"hii\\\"}\"]','/uploads/1737031455959.jpg'),(6,'praveen','ppostagram',2,'[\"{\\\"username\\\":\\\"praveen\\\",\\\"comment\\\":\\\"ssds\\\"}\"]','/uploads/1737103764928.webp'),(7,'praveen','book to trap postagram',1,NULL,'/uploads/1737113266428.jpg');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-17 17:15:52
