DEPENDENCIES			:= cut date git npm
$(foreach dependency, ${DEPENDENCIES}, $(if $(shell which ${dependency}),, $(error No ${dependency} in PATH)))

TAG						    := $(shell git describe --abbrev=0)
NEXT_VERSION_BASE	:= $(shell date +%y.%m)
VERSION_BASE			:= $(shell echo ${TAG} | cut -c1-5)
VERSION_PATCH			:= $(shell echo ${TAG} | cut -c7-)
SHELL					    := /bin/bash

ifeq (${VERSION_BASE}, ${NEXT_VERSION_BASE})
	NEXT_VERSION_PATCH	:= $(shell echo $$((${VERSION_PATCH} + 1)))
else
	NEXT_VERSION_PATCH	:= 0
endif

NEXT_VERSION			:= ${NEXT_VERSION_BASE}.${NEXT_VERSION_PATCH}

default: install

build:
	@npm run build

clean:
	@npm run clean

install:
	@npm install

lint:
	@npm run lint

release: lint test
	@echo -e "\n➜ creating release v${NEXT_VERSION}"
	@git checkout main
	@git tag --annotate "${NEXT_VERSION}" --message "Release v${NEXT_VERSION}"
	@git push --follow-tags
	@echo ✔ successfully created release v${NEXT_VERSION}

test:
	@npm run test
