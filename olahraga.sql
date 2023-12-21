-- Adminer 4.8.1 MySQL 8.0.30 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `telepon` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jenistrainer` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jenisKelamin` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `trainer` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `member` (`id`, `nama`, `email`, `password`, `telepon`, `jenistrainer`, `jenisKelamin`, `trainer`) VALUES
(13,	'MUHAMMAD RIZKY',	'sosialworkme@gmail.com',	'202cb962ac59075b964b07152d234b70',	'08108120',	'Trainer 2',	'laki-laki',	NULL),
(15,	'TESTER',	'test@gmail.com',	'202cb962ac59075b964b07152d234b70',	'085766184',	'Trainer 1',	'laki-laki',	NULL),
(17,	'MUHAMMAD RIZKY',	'dmin@gmail.com',	'202cb962ac59075b964b07152d234b70',	'3040134091840',	'Trainer 2',	'laki-laki',	NULL);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `user` (`id`, `nama`, `email`, `password`) VALUES
(1,	'Muhammad Rizky',	'admin@gmail.com',	'admin123');

-- 2023-12-19 15:21:21
