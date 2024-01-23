all: build

PROJECT=opnclssrm
CONTAINER_NAME=tableanalyzer_ctn
IMAGE_NAME=tableanalyzer_img
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

stop:
	docker stop $(CONTAINER_NAME)

stopall:
	docker stop $$(docker ps -q -a)

##cleaning
dri:
	docker rmi $$(docker images -q)

drmf:
	docker rm -f $$(docker ps -q -a)

prune:
	docker image prune -a

builderprune:
	docker builder prune

erase: stop
	docker container rm $(CONTAINER_NAME) && docker image rm $$(docker images '*$(CONTAINER_NAME)*')

# launch
build:
	docker-compose build

up:
	docker-compose up
upd:
	docker-compose up -d

commitctn:
	docker commit $(CONTAINER_NAME) $(IMAGE_NAME)_prod

savectn:
	docker save -o $(CONTAINER_NAME).tar $(IMAGE_NAME)_prod

loadctn:
	docker load --input $(CONTAINER_NAME).tar

# install
installclient:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) cd ./frondend && yarn

installserver:
	docker exec  $(REMOTE_ROOT) $(CONTAINER_NAME) cd ./backend && yarn

.FORCE:
