FROM debian:bullseye
ENV DEBIAN_FRONTEND noninteractive
ENV LSB_RELEASE=bullseye
ENV NODE_VERSION=18.15.0
ENV NODE_ARCH=node-v$NODE_VERSION-linux-x64.tar.xz

ENV ARCH=x64
ADD /install/sql/createdb.sql /tmp/createdb.sql
ADD /install/sql/training2voice.sql /tmp/training2voice.sql

WORKDIR "/root"

RUN apt-get update && apt-get install -y nano vim mc \
    nginx \
    apt-utils \
    xz-utils \
    systemctl \
    supervisor;

#node
ADD https://nodejs.org/dist/v$NODE_VERSION/$NODE_ARCH .
RUN tar -xJf "$NODE_ARCH" -C /usr/local --strip-components=1 --no-same-owner; \
  rm "$NODE_ARCH";

# MySQL Server
RUN apt install -y mariadb-server --no-install-recommends;

RUN mkdir /root/trf; \    
    /etc/init.d/mariadb start;
RUN chown -R www-data:www-data /var/www/html && chmod -R g+s /var/www/html;\
    chmod -R 777 /var/www/html;
RUN npm install -g yarn; \
    npm update -g; \
    yarn global add nodemon; \
    yarn global add sequelize-cli; \
    yarn global add sequelize-mig; \
    mysql -u root < /tmp/createdb.sql; \
    mysql -u root --database="tableanalyze" < /tmp/createtables.sql;
RUN cd /root/frontend && yarn; \
    cd /var/www/html/tableanalyzer && yarn;
#clean
RUN  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
     apt autoclean;
EXPOSE 80 3000 4000 3306
ENTRYPOINT ["/usr/bin/supervisord"]



