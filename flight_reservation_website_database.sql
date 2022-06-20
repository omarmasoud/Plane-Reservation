SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `credit_card_details` (
  `profile_id` varchar(20) NOT NULL,
  `card_number` varchar(20) NOT NULL,
  `card_type` varchar(20) NOT NULL,
  `expiration_month` varchar(10) NOT NULL,
  `expiration_year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `flight_times` (
  `flight_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `passenger_profile` (
  `profile_id` varchar(20) NOT NULL,
  `pass_word` varchar(20) DEFAULT NULL,
  `first_name` varchar(10) NOT NULL,
  `last_name` varchar(10) NOT NULL,
  `address` varchar(50) NOT NULL,
  `tel_no` varchar(20) NOT NULL,
  `email_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `ticket_info` (
  `ticket_id` varchar(20) NOT NULL,
  `profile_id` varchar(20) NOT NULL,
  `flight_id` varchar(20) NOT NULL,
  `departure_time` datetime NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `flight` (`flight_id`, `airline_id`, `airline_name`, `from_location`, `to_loaction`, `departure_time`, `arrival_time`, `duration`, `total_seats`, `price`, `available_seats`) VALUES
('AX812', NULL, NULL, NULL, NULL, '2022-06-20 01:23:13', NULL, NULL, NULL, NULL, NULL);

ALTER TABLE `credit_card_details`
  ADD PRIMARY KEY (`profile_id`);

ALTER TABLE `flight`
  ADD PRIMARY KEY (`flight_id`,`departure_time`);

ALTER TABLE `flight_times`
  ADD PRIMARY KEY (`flight_time`);

ALTER TABLE `passenger_profile`
  ADD PRIMARY KEY (`profile_id`);

ALTER TABLE `ticket_info`
  ADD PRIMARY KEY (`ticket_id`,`profile_id`),
  ADD KEY `flight_id` (`flight_id`,`departure_time`),
  ADD KEY `profile_id` (`profile_id`);

ALTER TABLE `credit_card_details`
  ADD CONSTRAINT `credit_card_details_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `passenger_profile` (`profile_id`);

ALTER TABLE `ticket_info`
  ADD CONSTRAINT `ticket_info_ibfk_1` FOREIGN KEY (`flight_id`,`departure_time`) REFERENCES `flight` (`flight_id`, `departure_time`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_info_ibfk_2` FOREIGN KEY (`profile_id`) REFERENCES `passenger_profile` (`profile_id`);
COMMIT;
