ENV_FILE ?= .env
PROJECT_DIR = $(shell pwd)
include $(ENV_FILE)

# check dependent programs exist
# Ref: https://stackoverflow.com/questions/5618615/check-if-a-program-exists-from-a-makefile/5810179
EXECUTABLES = docker npm
CE := $(foreach exec,$(EXECUTABLES),\
        $(if $(shell which $(exec)),dummy,$(error "No $(exec) in PATH")))

.PHONY: build startmysql stopmysql run running

migration-script:
	$(shell ./migration.sh)

build:	
	@echo Buiding the blog app
	source $(HOME)/.nvm/nvm.sh && \
	cd blog && nvm use && \
	npm install > /dev/null && npm run build > /dev/null

run: build startmysql
	@echo Checking DB status...
	db_port=$$(docker port blog-template-db) && \
	if ! [[ "$$db_port" == *":3306" ]]; then \
		echo "DB is not running. Please try again later..."; \
		exit 1; \
	fi
	@echo DB is ready. Starting the web app now...
	source $(HOME)/.nvm/nvm.sh && \
	cd blog && nvm use && \
	npm run start
	

startmysql: stopmysql migration-script
	@echo Starting up MySql
	docker run --name blog-template-db -d -p 3306:3306 -v \
	${PROJECT_DIR}/db/scripts:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} \
	-e MYSQL_USER=${MYSQL_USER} -e MYSQL_PASSWORD=${MYSQL_PASSWORD} -e MYSQL_DATABASE=${MYSQL_DATABASE} mysql:5.7

stopmysql: 
	-docker stop blog-template-db
	-docker rm blog-template-db

help:
	@echo Comming soon

