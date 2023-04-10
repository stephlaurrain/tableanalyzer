all: build

PROJECT=opnclssrm
CONTAINER_NAME=tableanalyze_ctn
IMAGE_NAME=tableanalyze_img
DOCKER_USER=docker
REMOTE_ROOT=-w '/root'

startdocker:
	service docker start

listctn:
	docker container ls --all

listimg:
	docker image ls

rembash:
	docker exec -ti $(CONTAINER_NAME) bash

getip:
	docker inspect $(CONTAINER_NAME) | grep "IPAddress"

restartapache:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) service apache2 restart

startapache:
	docker exec   $(REMOTE_ROOT) $(CONTAINER_NAME) service apache2 start

startmysql:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) /etc/init.d/mysql start

stop:
	docker stop $(CONTAINER_NAME)

startbackend:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) bash -c 'cd /root/backend && yarn start'

stopall:
	docker stop $$(docker ps -q -a)

##cleaning
dri:
	docker rmi $$(docker images -q)

drmf:
	docker rm -f $$(docker ps -q -a)

#clnall: stopall drmf dri prune

clnright:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) bash -c '/root/install/clnright.sh'

init:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) bash -c '/root/install/init.sh'

prune:
	docker image prune -a

builderprune:
	docker builder prune

#param make erase CONTAINER_NAME="mon_container" lancé par make erase CONTAINER_NAME="pro"
erase: stop
	docker container rm $(CONTAINER_NAME) && docker image rm $$(docker images '*$(CONTAINER_NAME)*')

#
# launch
build:
	docker-compose build

up:
	docker-compose up
upd:
	docker-compose up -d

setpsswd:
	docker exec  $(REMOTE_ROOT)  $(CONTAINER_NAME) passwd docker

buildraw:
	docker build -t $(CONTAINER_NAME) ./docker/build

browser:
	python3 browser.py

commitctn:
	docker commit $(CONTAINER_NAME) $(IMAGE_NAME)_prod

savectn:
	docker save -o $(CONTAINER_NAME).tar $(IMAGE_NAME)_prod
# docker save -o tableanalyze_ctn.tar tableanalyze_tableanalyze_img

loadctn:
	docker load --input $(CONTAINER_NAME).tar

.FORCE:
