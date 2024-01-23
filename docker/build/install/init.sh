
service mariadb start
mysql -u root < /root/install/sql/createdb.sql
mysql -u root --database="tableanalyzer" < /root/install/sql/createtables.sql
