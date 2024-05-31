.PHONY: help
help: ## Help
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: run-lint-makefile
run-lint-makefile: ## Run lint for Makefile
	perl -pi -e 's/^  */\t/' Makefile

.PHONY: build-web
build-web: ## Build docker image for app
	docker build --no-cache --target web -t ghcr.io/hywax/plantuml-web:latest -f docker/Dockerfile .

.PHONY: build-workers
build-workers: ## Build docker image for workers
	docker build --no-cache --target workers -t ghcr.io/hywax/plantuml-workers:latest -f docker/Dockerfile .

.PHONY: build-migrator
build-migrator: ## Build docker image for migrator
	docker build --no-cache --target migrator -t ghcr.io/hywax/plantuml-migrator:latest -f docker/Dockerfile .
