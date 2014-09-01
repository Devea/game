-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Počítač: localhost
-- Vygenerováno: Pon 01. zář 2014, 15:50
-- Verze serveru: 5.6.12-log
-- Verze PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databáze: `devea`
--
CREATE DATABASE IF NOT EXISTS `devea` DEFAULT CHARACTER SET utf8 COLLATE utf8_czech_ci;
USE `devea`;

-- --------------------------------------------------------

--
-- Struktura tabulky `inventory`
--

CREATE TABLE IF NOT EXISTS `inventory` (
  `pid` int(11) NOT NULL,
  `iid` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`pid`,`iid`),
  KEY `pid` (`pid`),
  KEY `iid` (`iid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `inventory`
--

INSERT INTO `inventory` (`pid`, `iid`, `count`) VALUES
(3, 1, 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci AUTO_INCREMENT=3 ;

--
-- Vypisuji data pro tabulku `items`
--

INSERT INTO `items` (`id`, `name`, `description`) VALUES
(1, 'Klacek', 'Prostě obyčejný dřevěný klacek, který se válel někde v lese.'),
(2, 'Jablko', 'Krásné červené jablíčko.');

-- --------------------------------------------------------

--
-- Struktura tabulky `players`
--

CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_czech_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_czech_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_czech_ci NOT NULL,
  `avatar` varchar(50) COLLATE utf8_czech_ci DEFAULT NULL,
  `gold` int(11) NOT NULL DEFAULT '0',
  `registration_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci AUTO_INCREMENT=4 ;

--
-- Vypisuji data pro tabulku `players`
--

INSERT INTO `players` (`id`, `name`, `password`, `email`, `avatar`, `gold`, `registration_date`) VALUES
(2, 'typekcz', '849b28dcbe2c37b2c60d994e5dbd4b21535d0701', 'typekcz@m1p.eu', NULL, 15, '2014-09-01 15:48:28'),
(3, 'Sparkle', 'a1f1dc05a9c9d28eabfbc83e9f1bf3a0ed96b85b', '@', NULL, 100, '2014-09-01 15:49:36');

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory-iid` FOREIGN KEY (`iid`) REFERENCES `items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inventory-pid` FOREIGN KEY (`pid`) REFERENCES `players` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
