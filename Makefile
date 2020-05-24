export SHELL:=/bin/bash
export SHELLOPTS:=$(if $(SHELLOPTS),$(SHELLOPTS):)pipefail:errexit

.ONESHELL:

ENV_FILE ?= .env
PROJECT_DIR = $(shell pwd)
include $(ENV_FILE)

.PHONY: build startmysql stopmysql run running

build:
	@echo Creating the db migration script
	$(shell ./migration.sh)
	@echo Done. Please find the migration script at db/scripts/migration.sql
	@echo Buiding the blog app
	

run:

startmysql: stopmysql build
	@echo Starting up MySql
	docker run --name blog-template-db -d -p 3306:3306 -v \
	${PROJECT_DIR}/db/scripts:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} \
	-e MYSQL_USER=${MYSQL_USER} -e MYSQL_PASSWORD=${MYSQL_PASSWORD} -e MYSQL_DATABASE=${MYSQL_DATABASE} mysql:5.7

running:
	@echo running

stopmysql: 
	-docker stop blog-template-db
	-docker rm blog-template-db

help:
	@echo help is coming

