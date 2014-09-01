-- phpMyAdmin SQL Dump
-- version 4.2.7
-- http://www.phpmyadmin.net
--
-- Počítač: localhost
-- Vytvořeno: Pon 01. zář 2014, 14:47
-- Verze serveru: 5.5.38-MariaDB
-- Verze PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databáze: `devea`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `login`
--

CREATE TABLE IF NOT EXISTS `login` (
`id` int(11) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL,
  `img` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `gold` int(11) NOT NULL DEFAULT '0',
  `hardcore` tinyint(1) NOT NULL,
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL DEFAULT 'newbie',
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Vypisuji data pro tabulku `login`
--

INSERT INTO `login` (`id`, `name`, `password`, `title`, `img`, `gold`, `hardcore`, `status`, `register_date`) VALUES
(1, 'Sparkle', 'devea', 'devea', '', 0, 0, 'newbie', '2014-09-01 14:17:02');

--
-- Klíče pro exportované tabulky
--

--
-- Klíče pro tabulku `login`
--
ALTER TABLE `login`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `login`
--
ALTER TABLE `login`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
