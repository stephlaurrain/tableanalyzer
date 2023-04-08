CREATE TABLE IF NOT EXISTS `ggatetable` (
`id` int(11) UNSIGNED NOT NULL,
  `idggate` varchar(250) NOT NULL,
  `comm` varchar(4000) NOT NULL,
  `mapped` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
ALTER TABLE `ggatetable`
 ADD PRIMARY KEY (`id`);
ALTER TABLE `ggatetable`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

