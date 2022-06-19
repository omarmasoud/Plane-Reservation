-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2022 at 10:49 PM
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
-- Database: `flight reservation website database`
--

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
-- Indexes for table `ticket_info`
--
ALTER TABLE `ticket_info`
  ADD PRIMARY KEY (`ticket_id`,`profile_id`),
  ADD KEY `flight_id` (`flight_id`,`departure_time`),
  ADD KEY `profile_id` (`profile_id`);

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
