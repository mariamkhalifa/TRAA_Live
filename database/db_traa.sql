-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 25, 2020 at 01:17 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_traa`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about_history`
--

CREATE TABLE `tbl_about_history` (
  `history_id` int(11) NOT NULL,
  `history_year` int(11) NOT NULL,
  `history_entry` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_about_history`
--

INSERT INTO `tbl_about_history` (`history_id`, `history_year`, `history_entry`) VALUES
(1, 1986, 'The TRAA was formed by anglers concerned with the state of the fishery in the Thames River watershed, particularly the dwindling smallmouth bass population in the North Thames River. We began rearing rainbow trout in an outdoor upwelling incubation box.'),
(2, 1999, 'The TRAA and the Upper Thames River Conservation Authority (UTRCA), with the blessing of the Ministry of Natural Resources (MNR), agreed to the operation of a walleye hatchery in Fanshawe Conservation Area, just north-east of London, Ontario.'),
(4, 2010, 'TRAA members start a 5-year Salmonid Tagging and Monitoring Program with personnel from the Upper Thames River Conservation Authority (UTRCA) and Jon George, an MNR biologist from Thunder Bay.'),
(5, 2019, 'We continue to celebrate over 30 years of operation and are still very involved in our community through educational tours of our trout hatchery, release programs, removing deadfalls from Komoka Creek, working towards our Brook Trout program and the decommissioning of the Spring Bank dam.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about_missions`
--

CREATE TABLE `tbl_about_missions` (
  `mission_id` int(11) NOT NULL,
  `mission_title` varchar(200) NOT NULL,
  `mission_icon` varchar(250) NOT NULL,
  `mission_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_about_missions`
--

INSERT INTO `tbl_about_missions` (`mission_id`, `mission_title`, `mission_icon`, `mission_desc`) VALUES
(1, 'Protect the Fishery', 'icon_fish_protect.svg', 'Protect, enhance and regenerate a viable, multi-species, year-round fishery.'),
(2, 'Environmental Clean Up', 'icon_vest.svg', 'Promote and participate in environmental clean-up, pollution control and rehabilitation.'),
(4, 'Monitor Species', 'icon_give_back.svg', 'Breed, relocate and stock to re-establish or augment appropriate species of fish.'),
(5, 'Form Partnerships', 'icon_fish_sharing.svg', 'Form partnerships with community businesses, government agencies, special interest groups, landowners, and other stakeholders in the Thames River Watershed.'),
(6, 'Promote Safe Fishing', 'icon_angler.svg', 'Promote environmentally sound sport fishing practices.'),
(7, 'Increase Awareness', 'icon_fish_circle.svg', 'Increase public awareness of the unique diversity of the Thames River Watershed, its challenges, its recreational opportunities and its vital importance to our community.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about_title`
--

CREATE TABLE `tbl_about_title` (
  `id` int(11) NOT NULL,
  `page_title` varchar(250) NOT NULL,
  `tagline` text NOT NULL,
  `missions_title` varchar(100) NOT NULL,
  `history_title` varchar(100) NOT NULL,
  `team_title` varchar(100) NOT NULL,
  `team_statement` text NOT NULL,
  `team_title1` varchar(100) NOT NULL,
  `team_title2` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_about_title`
--

INSERT INTO `tbl_about_title` (`id`, `page_title`, `tagline`, `missions_title`, `history_title`, `team_title`, `team_statement`, `team_title1`, `team_title2`) VALUES
(1, 'Who is the TRAA?', 'Hands-on Environmentalism is what we do.', 'Our Mission', 'Our History', 'Meet The Team', 'The TRAA has a history of always having a core group of active members supported by those who just want to be part of the solution. Either way, every member of the TRAA is active in their advocacy for the health of the Thames River watershed and its inhabitants.', 'Executives', 'Volunteers');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blog`
--

CREATE TABLE `tbl_blog` (
  `blog_id` int(11) NOT NULL,
  `blog_title` varchar(250) NOT NULL,
  `blog_subtitle` varchar(250) NOT NULL,
  `blog_thumb` varchar(250) NOT NULL,
  `blog_summary` text NOT NULL,
  `blog_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_blog`
--

INSERT INTO `tbl_blog` (`blog_id`, `blog_title`, `blog_subtitle`, `blog_thumb`, `blog_summary`, `blog_date`) VALUES
(1, 'Annual Paddle & Fish', 'Third Annual Paddle and Fish', 'blog_thumb1.jpg', '\"This year we be mixed it up a bit by having the Annual TRAA Paddle & Fish on Sharon Creek Reservoir. A thunderstorm threatened but only gave us a few minutes of rain to cool us off. Fish targeted were largemouth bass, crappie and other panfish as well as some bruiser carp...\"', 'May 05, 2020'),
(2, '\"Dam\" Nation', 'Presenting the Documentary', 'blog_thumb2.jpg', '\"A moving documentary, a great venue to show it and all in support of a meaningful issue in our city: the decommissioning of Springbank Dam...\"', 'May 08, 2020'),
(4, 'Trout Release', 'Releasing the Rainbow Trout', 'blog_thumb3.jpg', '\"This year we were pleased to welcome visitors from Chipewas of the Thames First Nation, to tour the trout hatchery and assist us with the release of more than...\"', 'May 05, 2020');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blog_categories`
--

CREATE TABLE `tbl_blog_categories` (
  `blog_categ_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `categ_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_blog_categories`
--

INSERT INTO `tbl_blog_categories` (`blog_categ_id`, `blog_id`, `categ_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(4, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_categories`
--

CREATE TABLE `tbl_categories` (
  `categ_id` int(11) NOT NULL,
  `categ_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`categ_id`, `categ_name`) VALUES
(1, 'Event'),
(2, 'Update'),
(4, 'Project');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `id` int(11) NOT NULL,
  `page_title` varchar(200) NOT NULL,
  `intro_title` varchar(200) NOT NULL,
  `intro_text` text NOT NULL,
  `announcement` text NOT NULL,
  `gen_meeting_title` varchar(100) NOT NULL,
  `gen_meeting_text` text NOT NULL,
  `mail_add_title` varchar(100) NOT NULL,
  `mail_add_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`id`, `page_title`, `intro_title`, `intro_text`, `announcement`, `gen_meeting_title`, `gen_meeting_text`, `mail_add_title`, `mail_add_text`) VALUES
(1, 'Contact Us', 'The TRAA Would Like To Hear From You', 'Need more information? Want to get involved? Please don\'t hesitate to contact us.', 'Get in touch with us at the next meeting. Check the events page for the next meeting location.', 'General Meetings', 'Come to our meetings every second Wednesday of the month at 7:00pm at WOFGPA.', 'Mailings Address Only', 'Thames River Anglers Association 2202 Coronation Drive London, ON N6G 0B9');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_events`
--

CREATE TABLE `tbl_events` (
  `events_id` int(11) NOT NULL,
  `events_title` varchar(100) NOT NULL,
  `events_day` int(11) NOT NULL,
  `events_month` varchar(5) NOT NULL,
  `events_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_events`
--

INSERT INTO `tbl_events` (`events_id`, `events_title`, `events_day`, `events_month`, `events_desc`) VALUES
(1, 'General Meeting', 9, 'Jan', 'Happy New Year! We are meeting at 7:00pm at 790 Southdale Road to do awesome things.'),
(2, 'Visit the hatchery', 6, 'Feb', 'Come visit the hatchery from 10:00am to 3pm at 123 Fish Rd. and see our brown trout.'),
(4, 'Brown Trout Program', 8, 'Mar', 'We are proud to announce our newest project: the release of our brown trout.'),
(5, 'Salmon Release', 26, 'Mar', 'Did you know that the average size of the salmon we release is 40cm large?');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_events_title`
--

CREATE TABLE `tbl_events_title` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_events_title`
--

INSERT INTO `tbl_events_title` (`id`, `title`) VALUES
(1, 'Upcoming Events');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_executives`
--

CREATE TABLE `tbl_executives` (
  `exec_id` int(11) NOT NULL,
  `exec_name` varchar(100) NOT NULL,
  `exec_role` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_executives`
--

INSERT INTO `tbl_executives` (`exec_id`, `exec_name`, `exec_role`) VALUES
(1, 'Rob Hunter', 'President'),
(2, 'Paul Holmes', 'Vice-Presidient'),
(4, 'Jeremy Beaton', 'Secretary'),
(5, 'Randy Bailey', 'Treasurer'),
(6, 'Adam Bengen', 'Chairperson');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_about`
--

CREATE TABLE `tbl_home_about` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `statement` text NOT NULL,
  `image_large` varchar(250) NOT NULL,
  `image_small` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_about`
--

INSERT INTO `tbl_home_about` (`id`, `title`, `statement`, `image_large`, `image_small`) VALUES
(1, 'About The TRAA', 'We are a “hands on” environmental group who likes to work at a grass roots level.', 'home_about.jpg', 'home_about_small.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_about_missions`
--

CREATE TABLE `tbl_home_about_missions` (
  `id` int(11) NOT NULL,
  `icon` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_about_missions`
--

INSERT INTO `tbl_home_about_missions` (`id`, `icon`, `title`, `desc`) VALUES
(1, 'icon_fish_protect.svg', 'We Protect', 'Our fishery, river fish, and environment'),
(2, 'icon_angler.svg', 'We Promote', 'Safe fishing practices, pollution control, and awareness'),
(4, 'icon_fish_sharing.svg', 'We Participate', 'In rehabilitation, environmental clean-up, and our community');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_impact`
--

CREATE TABLE `tbl_home_impact` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `text1` text NOT NULL,
  `text2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_impact`
--

INSERT INTO `tbl_home_impact` (`id`, `title`, `text1`, `text2`) VALUES
(1, 'Our Impact', 'Our work is what sets the TRAA apart from other clubs and organizations. You’ll find us right in the water clearing obstructions from streams, measuring returning salmonids & taking scale samples for DNA analysis, educating through trout hatchery tours & stream walks, being a voice for the Thames River watershed inhabitants...', 'The list goes on.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_news`
--

CREATE TABLE `tbl_home_news` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `intro` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_news`
--

INSERT INTO `tbl_home_news` (`id`, `title`, `intro`) VALUES
(1, 'Latest News', 'Events and activities are what the TRAA’s all about! See our blog for past events.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_sponsors`
--

CREATE TABLE `tbl_home_sponsors` (
  `spon_id` int(11) NOT NULL,
  `spon_img` varchar(250) NOT NULL,
  `spon_name` varchar(250) NOT NULL,
  `spon_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_sponsors`
--

INSERT INTO `tbl_home_sponsors` (`spon_id`, `spon_img`, `spon_name`, `spon_text`) VALUES
(1, 'home_sponsor_melchers.jpg', 'Melchers Construction Limited', 'Over the past couple of years the folks at Melchers Construction Ltd have offered up their beautiful boardroom for TRAA executive meetings. It\'s an ideal space with all the amenities required for us to accomplish all the \"behind the scenes\" work of the TRAA. Many thanks go out to the continued support of Melchers Construction Ltd.'),
(2, 'home_sponsor_muma.jpg', 'Muma Manufacturing', 'The TRAA voted unanimously to re-name the TRAA trout hatchery honouring Keith Wales\' memory and his unselfish support of the TRAA\'s work in the London area, in particular Komoka Creek. Special thanks go out to Muma Manufacturing in St. Thomas for donating the beautiful laser-cut aluminum sign.'),
(4, 'home_sponsor_guillevin.jpg', 'Guillevin International Co', 'Members of the trout hatchery rotation know the woes we\'ve had with lighting in the hatchery. Even with larger fixtures installed a few years ago, it was still frustrating on days when the mercury dipped below -15C and the fluorescent technology just teased us with its dull flicker. Enter Mike Jeffries of Guillevin Greentech in London with nice set of bright and dependable (and new!) LED fixtures. Once they were installed it was like working in well-appointed laboratory.'),
(5, 'home_sponsor_tryRecycling.jpg', 'Try Recycling Inc', 'After cleaning up the area around the TRAA shed and trout hatchery, our trailer was quite full and needed to be emptied. A big \'thank you\' goes out to Rick Vandersluis and Mike Seabrook of Try Recycling who allowed the TRAA to empty the trailer at their facility free of charge.'),
(6, 'home_sponsor_angling.jpg', 'Angling Sports', 'Before we could take the trailer to Try Recycling, we needed to get the spare tire for the trailer fixed. Pat Devincenzo, proprietor of Angling Sports, offered to get it repaired. Turns out the tire needed replacing and Pat took care of it.\r\nAngling Sports also supplied cards for all TRAA members that entitle them to a discount equal to the tax on anything in the store.\r\nThanks Pat, your generosity is greatly appreciated.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_sponsors_intro`
--

CREATE TABLE `tbl_home_sponsors_intro` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_sponsors_intro`
--

INSERT INTO `tbl_home_sponsors_intro` (`id`, `title`, `text`) VALUES
(1, 'Sponsors', 'The support of the following local area businesses is much appreciated:');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_video`
--

CREATE TABLE `tbl_home_video` (
  `id` int(11) NOT NULL,
  `video` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_video`
--

INSERT INTO `tbl_home_video` (`id`, `video`) VALUES
(1, 'traa_video.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_welcome`
--

CREATE TABLE `tbl_home_welcome` (
  `id` int(11) NOT NULL,
  `intro` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home_welcome`
--

INSERT INTO `tbl_home_welcome` (`id`, `intro`) VALUES
(1, '\"For the enhancement, protection and promotion of a viable, multi-species fishery within the Thames River watershed. Dedication today for tomorrow.”');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_members`
--

CREATE TABLE `tbl_members` (
  `member_id` int(11) NOT NULL,
  `member_name` varchar(100) NOT NULL,
  `member_email` varchar(250) NOT NULL,
  `member_dob` varchar(50) NOT NULL,
  `member_phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_membership_info`
--

CREATE TABLE `tbl_membership_info` (
  `info_id` int(11) NOT NULL,
  `info_item` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_membership_info`
--

INSERT INTO `tbl_membership_info` (`info_id`, `info_item`) VALUES
(1, 'Annual plan'),
(2, 'TRAA membership card'),
(4, 'Share your membership with your family'),
(5, 'Good standing as a TRAA member'),
(6, 'Periodic updates about TRAA activities');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_membership_title`
--

CREATE TABLE `tbl_membership_title` (
  `id` int(11) NOT NULL,
  `page_title` varchar(100) NOT NULL,
  `membership_title` varchar(200) NOT NULL,
  `membership_text` text NOT NULL,
  `membership_price` varchar(25) NOT NULL,
  `membership_tagline` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_membership_title`
--

INSERT INTO `tbl_membership_title` (`id`, `page_title`, `membership_title`, `membership_text`, `membership_price`, `membership_tagline`) VALUES
(1, 'Membership', 'TRAA Membership', 'Participate, help out, have fun and give a little bit back to the Thames River watershed!', '$25', 'Best Value Deal!');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `project_id` int(11) NOT NULL,
  `project_title` varchar(200) NOT NULL,
  `project_smallimg` varchar(250) NOT NULL,
  `project_largeimg` varchar(250) NOT NULL,
  `project_animation` tinyint(1) NOT NULL,
  `project_comingsoon` tinyint(1) NOT NULL,
  `project_archive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`project_id`, `project_title`, `project_smallimg`, `project_largeimg`, `project_animation`, `project_comingsoon`, `project_archive`) VALUES
(1, 'Trout Hatchery', 'projects_hatchery_small.jpg', 'projects_hatchery.jpg', 1, 0, 0),
(2, 'Salmonid Monitoring Program', 'projects_salmonid_monitoring_small.jpg', 'projects_salmonid_monitoring.jpg', 1, 0, 0),
(4, 'Komoka Creek Hydrological Study', 'projects_komoka_creek_small.jpg', 'projects_komoka_creek.jpg', 1, 0, 0),
(5, 'Brook Trout Program', 'projects_brown_trout_hatchery_small.jpg', 'projects_brown_trout_hatchery.jpg', 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects_title`
--

CREATE TABLE `tbl_projects_title` (
  `id` int(11) NOT NULL,
  `page_title` varchar(100) NOT NULL,
  `donate_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects_title`
--

INSERT INTO `tbl_projects_title` (`id`, `page_title`, `donate_text`) VALUES
(1, 'Projects', 'Want to help out in TRAA\'s most vital projects?');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subscription`
--

CREATE TABLE `tbl_subscription` (
  `subsc_id` int(11) NOT NULL,
  `subsc_email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_subscription`
--

INSERT INTO `tbl_subscription` (`subsc_id`, `subsc_email`) VALUES
(1, 'm@test.ca'),
(2, 'mm@test.ca'),
(4, '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_volunteers`
--

CREATE TABLE `tbl_volunteers` (
  `volunteer_id` int(11) NOT NULL,
  `volunteer_name` varchar(250) NOT NULL,
  `volunteer_role` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_volunteers`
--

INSERT INTO `tbl_volunteers` (`volunteer_id`, `volunteer_name`, `volunteer_role`) VALUES
(1, 'Rob Huber, Paul Noble, Randy Bailey', 'Public Relation'),
(2, 'Adam Bengen, Randy Bailey', 'Hatchery Management'),
(3, 'Dan Schinkelshoek', 'Trout'),
(4, 'Pud Hunter', 'Warmwater'),
(5, 'Jeremy Beaton, Paul Holmes, Randy Bailey', 'Habitat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_about_history`
--
ALTER TABLE `tbl_about_history`
  ADD PRIMARY KEY (`history_id`);

--
-- Indexes for table `tbl_about_missions`
--
ALTER TABLE `tbl_about_missions`
  ADD PRIMARY KEY (`mission_id`);

--
-- Indexes for table `tbl_about_title`
--
ALTER TABLE `tbl_about_title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_blog`
--
ALTER TABLE `tbl_blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `tbl_blog_categories`
--
ALTER TABLE `tbl_blog_categories`
  ADD PRIMARY KEY (`blog_categ_id`);

--
-- Indexes for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  ADD PRIMARY KEY (`categ_id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_events`
--
ALTER TABLE `tbl_events`
  ADD PRIMARY KEY (`events_id`);

--
-- Indexes for table `tbl_events_title`
--
ALTER TABLE `tbl_events_title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_executives`
--
ALTER TABLE `tbl_executives`
  ADD PRIMARY KEY (`exec_id`);

--
-- Indexes for table `tbl_home_about`
--
ALTER TABLE `tbl_home_about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_home_about_missions`
--
ALTER TABLE `tbl_home_about_missions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_home_impact`
--
ALTER TABLE `tbl_home_impact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_home_news`
--
ALTER TABLE `tbl_home_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_home_sponsors`
--
ALTER TABLE `tbl_home_sponsors`
  ADD PRIMARY KEY (`spon_id`);

--
-- Indexes for table `tbl_home_sponsors_intro`
--
ALTER TABLE `tbl_home_sponsors_intro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_home_video`
--
ALTER TABLE `tbl_home_video`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_home_welcome`
--
ALTER TABLE `tbl_home_welcome`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_members`
--
ALTER TABLE `tbl_members`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `tbl_membership_info`
--
ALTER TABLE `tbl_membership_info`
  ADD PRIMARY KEY (`info_id`);

--
-- Indexes for table `tbl_membership_title`
--
ALTER TABLE `tbl_membership_title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `tbl_projects_title`
--
ALTER TABLE `tbl_projects_title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_subscription`
--
ALTER TABLE `tbl_subscription`
  ADD PRIMARY KEY (`subsc_id`);

--
-- Indexes for table `tbl_volunteers`
--
ALTER TABLE `tbl_volunteers`
  ADD PRIMARY KEY (`volunteer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_about_history`
--
ALTER TABLE `tbl_about_history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_about_missions`
--
ALTER TABLE `tbl_about_missions`
  MODIFY `mission_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_about_title`
--
ALTER TABLE `tbl_about_title`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_blog`
--
ALTER TABLE `tbl_blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_blog_categories`
--
ALTER TABLE `tbl_blog_categories`
  MODIFY `blog_categ_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  MODIFY `categ_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_events`
--
ALTER TABLE `tbl_events`
  MODIFY `events_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_events_title`
--
ALTER TABLE `tbl_events_title`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_executives`
--
ALTER TABLE `tbl_executives`
  MODIFY `exec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_home_about`
--
ALTER TABLE `tbl_home_about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_home_about_missions`
--
ALTER TABLE `tbl_home_about_missions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_home_impact`
--
ALTER TABLE `tbl_home_impact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_home_news`
--
ALTER TABLE `tbl_home_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_home_sponsors`
--
ALTER TABLE `tbl_home_sponsors`
  MODIFY `spon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_home_sponsors_intro`
--
ALTER TABLE `tbl_home_sponsors_intro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_home_video`
--
ALTER TABLE `tbl_home_video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_home_welcome`
--
ALTER TABLE `tbl_home_welcome`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_members`
--
ALTER TABLE `tbl_members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_membership_info`
--
ALTER TABLE `tbl_membership_info`
  MODIFY `info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_membership_title`
--
ALTER TABLE `tbl_membership_title`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_projects_title`
--
ALTER TABLE `tbl_projects_title`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_subscription`
--
ALTER TABLE `tbl_subscription`
  MODIFY `subsc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_volunteers`
--
ALTER TABLE `tbl_volunteers`
  MODIFY `volunteer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
