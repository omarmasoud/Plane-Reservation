-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2022 at 12:07 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flight_reservation_website_database`
--
CREATE DATABASE IF NOT EXISTS `flight_reservation_website_database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `flight_reservation_website_database`;

-- --------------------------------------------------------

--
-- Table structure for table `credit_card_details`
--

CREATE TABLE `credit_card_details` (
  `profile_id` varchar(20) NOT NULL,
  `card_number` varchar(20) NOT NULL,
  `card_type` varchar(20) NOT NULL,
  `expiration_month` varchar(10) NOT NULL,
  `expiration_year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `flight_id` varchar(20) NOT NULL,
  `airline_id` int(11) DEFAULT NULL,
  `airline_name` varchar(20) DEFAULT NULL,
  `from_location` varchar(50) DEFAULT NULL,
  `to_loaction` varchar(50) DEFAULT NULL,
  `departure_time` datetime NOT NULL,
  `arrival_time` datetime DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `total_seats` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `available_seats` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`flight_id`, `airline_id`, `airline_name`, `from_location`, `to_loaction`, `departure_time`, `arrival_time`, `duration`, `total_seats`, `price`, `available_seats`) VALUES
('AX812', NULL, NULL, NULL, NULL, '2022-06-20 01:23:13', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `flight_times`
--

CREATE TABLE `flight_times` (
  `flight_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `passenger_profile`
--

CREATE TABLE `passenger_profile` (
  `profile_id` varchar(20) NOT NULL,
  `pass_word` varchar(20) DEFAULT NULL,
  `first_name` varchar(10) NOT NULL,
  `last_name` varchar(10) NOT NULL,
  `address` varchar(50) NOT NULL,
  `tel_no` varchar(20) NOT NULL,
  `email_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethodoptions`
--

CREATE TABLE `paymentmethodoptions` (
  `id` int(11) NOT NULL,
  `methodid` int(11) NOT NULL,
  `optionid` int(11) NOT NULL,
  `creationdate` datetime DEFAULT NULL,
  `updatedate` datetime DEFAULT NULL,
  `isdeleted` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paymentmethodoptions`
--

INSERT INTO `paymentmethodoptions` (`id`, `methodid`, `optionid`, `creationdate`, `updatedate`, `isdeleted`) VALUES
(1, 1, 1, NULL, NULL, b'0'),
(2, 1, 2, NULL, NULL, b'0'),
(3, 1, 3, NULL, NULL, b'0'),
(4, 1, 4, NULL, NULL, b'0'),
(5, 2, 5, NULL, NULL, b'0'),
(6, 2, 6, NULL, NULL, b'0'),
(7, 3, 7, NULL, NULL, b'0'),
(8, 3, 10, NULL, NULL, b'0'),
(9, 4, 10, NULL, NULL, b'0'),
(10, 4, 9, NULL, NULL, b'0'),
(11, 4, 8, NULL, NULL, b'0');

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (
  `id` int(11) NOT NULL,
  `name` varchar(63) NOT NULL,
  `creationdate` datetime DEFAULT NULL,
  `updatedate` datetime DEFAULT NULL,
  `isdeleted` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paymentmethods`
--

INSERT INTO `paymentmethods` (`id`, `name`, `creationdate`, `updatedate`, `isdeleted`) VALUES
(1, 'Visa', NULL, NULL, b'0'),
(2, 'Fawry', NULL, NULL, b'0'),
(3, 'Cash', NULL, NULL, b'0'),
(4, 'Bank Transfer', NULL, NULL, b'0');

-- --------------------------------------------------------

--
-- Table structure for table `paymentoptions`
--

CREATE TABLE `paymentoptions` (
  `id` int(11) NOT NULL,
  `name` varchar(63) NOT NULL,
  `type` varchar(63) NOT NULL,
  `creationdate` datetime DEFAULT NULL,
  `updatedate` datetime DEFAULT NULL,
  `isdeleted` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paymentoptions`
--

INSERT INTO `paymentoptions` (`id`, `name`, `type`, `creationdate`, `updatedate`, `isdeleted`) VALUES
(1, 'Card Holder Name', 'String', NULL, NULL, b'0'),
(2, 'Card Number', 'Number', NULL, NULL, b'0'),
(3, 'Card Expiration Date (mm/yy)', 'MonthYear', NULL, NULL, b'0'),
(4, 'Card Security Code (CVC)', 'Number', NULL, NULL, b'0'),
(5, 'Email', 'Email', NULL, NULL, b'0'),
(6, 'Mobile Phone Number', 'Number', NULL, NULL, b'0'),
(7, 'National ID Number', 'Number', NULL, NULL, b'0'),
(8, 'Bank', 'Listbox:banks', NULL, NULL, b'0'),
(9, 'IBAN', 'Number', NULL, NULL, b'0'),
(10, 'Fullname', 'String', NULL, NULL, b'0');

-- --------------------------------------------------------

--
-- Table structure for table `paymentvalues`
--

CREATE TABLE `paymentvalues` (
  `id` int(11) NOT NULL,
  `pmoid` int(11) NOT NULL,
  `pmoval` varchar(127) NOT NULL,
  `donationid` int(11) NOT NULL,
  `creationdate` datetime DEFAULT NULL,
  `updatedate` datetime DEFAULT NULL,
  `isdeleted` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_info`
--

CREATE TABLE `ticket_info` (
  `ticket_id` varchar(20) NOT NULL,
  `profile_id` varchar(20) NOT NULL,
  `flight_id` varchar(20) NOT NULL,
  `departure_time` datetime NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `credit_card_details`
--
ALTER TABLE `credit_card_details`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`flight_id`,`departure_time`);

--
-- Indexes for table `flight_times`
--
ALTER TABLE `flight_times`
  ADD PRIMARY KEY (`flight_time`);

--
-- Indexes for table `passenger_profile`
--
ALTER TABLE `passenger_profile`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `paymentmethodoptions`
--
ALTER TABLE `paymentmethodoptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentoptions`
--
ALTER TABLE `paymentoptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentvalues`
--
ALTER TABLE `paymentvalues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket_info`
--
ALTER TABLE `ticket_info`
  ADD PRIMARY KEY (`ticket_id`,`profile_id`),
  ADD KEY `flight_id` (`flight_id`,`departure_time`),
  ADD KEY `profile_id` (`profile_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `paymentmethodoptions`
--
ALTER TABLE `paymentmethodoptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `paymentoptions`
--
ALTER TABLE `paymentoptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `paymentvalues`
--
ALTER TABLE `paymentvalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `credit_card_details`
--
ALTER TABLE `credit_card_details`
  ADD CONSTRAINT `credit_card_details_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `passenger_profile` (`profile_id`);

--
-- Constraints for table `ticket_info`
--
ALTER TABLE `ticket_info`
  ADD CONSTRAINT `ticket_info_ibfk_1` FOREIGN KEY (`flight_id`,`departure_time`) REFERENCES `flight` (`flight_id`, `departure_time`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_info_ibfk_2` FOREIGN KEY (`profile_id`) REFERENCES `passenger_profile` (`profile_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
