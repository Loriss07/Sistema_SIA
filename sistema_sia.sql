-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Gen 20, 2023 alle 00:31
-- Versione del server: 10.4.25-MariaDB
-- Versione PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistema_sia`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `animali`
--

CREATE TABLE `animali` (
  `ID_Animale` int(11) NOT NULL,
  `ID_Parco` int(11) NOT NULL,
  `Specie` varchar(30) NOT NULL,
  `Sesso` tinyint(1) NOT NULL,
  `Data di Nascita` date NOT NULL,
  `Stato di salute` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `animali`
--

INSERT INTO `animali` (`ID_Animale`, `ID_Parco`, `Specie`, `Sesso`, `Data di Nascita`, `Stato di salute`) VALUES
(1, 1, 'Cardellino', 1, '2018-09-10', 'Ala destra ferita'),
(2, 1, 'Volpe', 0, '2008-03-09', 'Buono'),
(3, 2, 'Tinca', 0, '2022-10-17', 'Buono; nato con pinne più piccole'),
(4, 2, 'Germano Reale', 1, '2021-07-17', 'Buono'),
(5, 3, 'Aquila Reale', 1, '2021-06-16', 'Denutrito'),
(6, 1, 'Scoiattolo Europeo', 1, '2021-06-16', 'Denutrito'),
(7, 2, 'Tinca', 0, '2009-09-09', 'Buono'),
(8, 2, 'Tinca', 1, '2002-09-09', 'Buono');

-- --------------------------------------------------------

--
-- Struttura della tabella `ordine`
--

CREATE TABLE `ordine` (
  `Ordine` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `ordine`
--

INSERT INTO `ordine` (`Ordine`) VALUES
('Accipitriformes'),
('Anseriformes'),
('Carnivora'),
('Cypriniformes'),
('Passeriformes'),
('Rodentia');

-- --------------------------------------------------------

--
-- Struttura della tabella `parco`
--

CREATE TABLE `parco` (
  `ID_Parco` int(11) NOT NULL,
  `Nome` varchar(35) NOT NULL,
  `Regione` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `parco`
--

INSERT INTO `parco` (`ID_Parco`, `Nome`, `Regione`) VALUES
(1, 'Parco dei Colli di Bergamo', 'Lombardia'),
(2, 'Parco Nazionale Adda Nord', 'Lombardia'),
(3, 'Parco Orobie Bergamasche', 'Lombardia');

-- --------------------------------------------------------

--
-- Struttura della tabella `specie`
--

CREATE TABLE `specie` (
  `ID_Specie` int(11) NOT NULL,
  `Specie` varchar(30) NOT NULL,
  `Ordine` varchar(30) NOT NULL,
  `Parco_di_appart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `specie`
--

INSERT INTO `specie` (`ID_Specie`, `Specie`, `Ordine`, `Parco_di_appart`) VALUES
(1, 'Aquila Reale', 'Accipitriformes', 3),
(2, 'Cardellino', 'Passeriformes', 1),
(3, 'Germano Reale ', 'Anseriformes', 2),
(4, 'Scoiattolo Europeo', 'Rodentia', 1),
(5, 'Tinca', 'Cypriniformes', 2),
(6, 'Volpe', 'Carnivora', 1);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `animali`
--
ALTER TABLE `animali`
  ADD PRIMARY KEY (`ID_Animale`),
  ADD KEY `idxSpecie` (`Specie`),
  ADD KEY `idxParco` (`ID_Parco`);

--
-- Indici per le tabelle `ordine`
--
ALTER TABLE `ordine`
  ADD PRIMARY KEY (`Ordine`);

--
-- Indici per le tabelle `parco`
--
ALTER TABLE `parco`
  ADD PRIMARY KEY (`ID_Parco`);

--
-- Indici per le tabelle `specie`
--
ALTER TABLE `specie`
  ADD PRIMARY KEY (`ID_Specie`),
  ADD KEY `Specie` (`Specie`),
  ADD KEY `Parco_di_appart` (`Parco_di_appart`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `animali`
--
ALTER TABLE `animali`
  MODIFY `ID_Animale` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `parco`
--
ALTER TABLE `parco`
  MODIFY `ID_Parco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `specie`
--
ALTER TABLE `specie`
  MODIFY `ID_Specie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `animali`
--
ALTER TABLE `animali`
  ADD CONSTRAINT `animali_ibfk_1` FOREIGN KEY (`ID_Parco`) REFERENCES `parco` (`ID_Parco`),
  ADD CONSTRAINT `animali_ibfk_2` FOREIGN KEY (`Specie`) REFERENCES `specie` (`Specie`);

--
-- Limiti per la tabella `specie`
--
ALTER TABLE `specie`
  ADD CONSTRAINT `specie_ibfk_1` FOREIGN KEY (`Parco_di_appart`) REFERENCES `parco` (`ID_Parco`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
