
service mariadb start
mysql -u root < /root/install/sql/createdb.sql
mysql -u root --database="tableanalyze" < /root/install/sql/tableanalyze.sql
