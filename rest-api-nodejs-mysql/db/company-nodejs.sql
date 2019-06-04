# Host: localhost  (Version 5.5.5-10.1.32-MariaDB)
# Date: 2019-06-03 22:04:10
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "employees"
#

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

#
# Data for table "employees"
#

INSERT INTO `employees` VALUES (1,'hel',5000000),(2,'hades',6000000),(3,'thor',6000000),(5,'ragnark',8000000),(6,'loky',2000000),(7,'atenea',2500000);

#
# Procedure "employeesAddOrEdit"
#

DROP PROCEDURE IF EXISTS `employeesAddOrEdit`;
CREATE PROCEDURE `employeesAddOrEdit`(
	in _id INT,
	in _name VARCHAR(45),
	in _salary INT
)
begin
	if _id = 0
		then
		insert into employees (name, salary)
		values (_name, _salary);
		set _id = last_insert_id();
	else
		update employees
		set
			name     = _name,
			salary   = _salary
			where id = _id;
	end if;
	
	select _id as id;
end;
