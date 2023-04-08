FROM debian:bullseye
ENV DEBIAN_FRONTEND noninteractive
ENV LSB_RELEASE=bullseye
ENV NODE_VERSION=18.15.0
ENV NODE_ARCH=node-v$NODE_VERSION-linux-x64.tar.xz

ENV ARCH=x64


WORKDIR "/root"

# COPY /conf/phpmyadmin/phpmyadmin.conf .

RUN apt-get update && apt-get install -y nano vim mc \
    apt-utils \
    xz-utils \
    supervisor;

#node
ADD https://nodejs.org/dist/v$NODE_VERSION/$NODE_ARCH .
RUN tar -xJf "$NODE_ARCH" -C /usr/local --strip-components=1 --no-same-owner; \
  rm "$NODE_ARCH";

# MySQL Server
RUN apt install -y mariadb-server --no-install-recommends;

RUN mkdir /root/trf; \
    /etc/init.d/mariadb start;  \
    a2enmod rewrite; \
    /etc/init.d/mariadb start;
    # service mariadb start;

COPY /conf/supervisord.conf /etc/supervisor/conf.d
#clean
RUN  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
     apt autoclean;
RUN npm install -g yarn; \
    npm update -g; \
    yarn global add nodemon; \
    yarn global add sequelize-cli; \
    yarn global add sequelize-mig
# faire make init
EXPOSE 80 3000 4000 3306
ENTRYPOINT ["/usr/bin/supervisord"]
# CMD [ "/root/install/init.sh" ]


