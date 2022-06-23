include .env

MAKEFILE=`echo ${MAKEFILE_LIST} | awk 'BEGIN { FS="[ ]" } ; { print $$1 }'`
help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

install: ## install dependencies
	@echo 'Install all dependencies'
	@yarn --force

run-api: ## run api in development mode
	@echo 'Run api'
	@yarn run-api
run-web: ## run emp in development mode
	@echo 'Run employer frontend'
	@yarn run-web
run-cms: ## run cms in development mode
	@echo 'Run cms frontend'
	@yarn run-cms

# build
build-lib: ## run build creport-lib lib
	@echo 'Run build creport-lib'
	@yarn build-lib
build-web: ## run build emp client
	@echo 'Run build web'
	@export NODE_ACTIVE_LANGUAGES=vi,en && yarn build-web
build-cms: ## run build jsk client
	@echo 'Run build cms'
	@export NODE_ACTIVE_LANGUAGES=vi,en && yarn build-cms
build-all:  ## run build all libs & projects
	@echo 'Run build all project'
	@export NODE_ACTIVE_LANGUAGES=vi,en
	@yarn build-web
	@yarn build-cms