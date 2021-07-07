-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: student
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student_management_tool`
--

DROP TABLE IF EXISTS `student_management_tool`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_management_tool` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `grade` varchar(3) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `phone` bigint NOT NULL,
  `address` varchar(100) NOT NULL,
  `status` varchar(6) DEFAULT 'true',
  `image_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_management_tool`
--

LOCK TABLES `student_management_tool` WRITE;
/*!40000 ALTER TABLE `student_management_tool` DISABLE KEYS */;
INSERT INTO `student_management_tool` VALUES (1,'Jhon wwe','Cena','A+','2021-11-23','Male','Jhon123@gmail.com',1234567921,'New YOrk City Awesome','false','jhonCena.jpg'),(3,'Seth','Rollins','B+','2021-11-23','Male','seth@gmail.com',1234567981,'New YOrk City Yes','false','EmailJS.png'),(4,'Ash','Poke','O','2021-11-22','Male','ash@gmail.com',1234555980,'Japan','true','ash.png'),(7,'Seth','Rollins','B+','2021-07-07','Male','seth123@gmail.com',2589631470,'Los Angeles city.','true','DatabaseAssignment5__8.png'),(8,'Roman','Reign','B+','2021-07-13','Male','roman12@gmail.com',1144556699,'London Englands','true','DatabaseAssignment5__4.png');
/*!40000 ALTER TABLE `student_management_tool` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-07 20:26:36
