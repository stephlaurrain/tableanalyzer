CREATE USER 'adm'@'%' IDENTIFIED BY 'set_ur_password';
GRANT ALL PRIVILEGES ON * . * TO 'adm'@'%' WITH GRANT OPTION;;
FLUSH PRIVILEGES;

CREATE DATABASE tableanalyzer CHARACTER SET utf8mb4;
CREATE USER 'tableanalyzer'@'%' IDENTIFIED BY 'set_ur_password';
GRANT ALL PRIVILEGES ON tableanalyzer.* TO 'tableanalyzer'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

