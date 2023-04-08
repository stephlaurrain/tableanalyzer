CREATE TABLE `Tables` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tab_id` varchar(255) DEFAULT NULL,
  `tab_collection` varchar(255) DEFAULT NULL,
  `tab_name` varchar(255) DEFAULT NULL,
  `tab_desc` text DEFAULT NULL,
  `tab_enum` varchar(255) DEFAULT NULL,
  `tab_count` varchar(255) DEFAULT NULL,
  `tab_model` text DEFAULT NULL,
  `tab_comment` text DEFAULT NULL,
  `tab_last_created` varchar(20) DEFAULT NULL,
  `tab_last_updated` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tab_id` (`tab_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `Columns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `col_id` varchar(255) DEFAULT NULL,
  `col_key` varchar(255) DEFAULT NULL,
  `col_name` varchar(255) DEFAULT NULL,
  `col_type` varchar(255) DEFAULT NULL,
  `col_nullable` varchar(255) DEFAULT NULL,
  `col_length` varchar(255) DEFAULT NULL,
  `col_default` varchar(255) DEFAULT NULL,
  `col_count` text DEFAULT NULL,
  `col_desc` varchar(255) DEFAULT NULL,
  `col_reference` varchar(255) DEFAULT NULL,
  `col_model` varchar(255) DEFAULT NULL,
  `col_comment` text DEFAULT NULL,
  `col_mapped` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `TableId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `TableId` (`TableId`),
  CONSTRAINT `Columns_ibfk_1` FOREIGN KEY (`TableId`) REFERENCES `Tables` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

