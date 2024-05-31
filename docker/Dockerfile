ARG NODE=node:20-alpine

################# Base Builder ##############
FROM $NODE AS builder

WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . /app

################# The Web builder ##############

FROM builder AS web_builder
WORKDIR /app/apps/web

RUN pnpm run build

################# The Web App ##############

FROM $NODE AS web
WORKDIR /app

ENV NODE_ENV production

COPY --from=web_builder --chown=node:node /app/apps/web/.output ./

ARG SERVER_VERSION=nightly
ENV SERVER_VERSION=${SERVER_VERSION}

CMD ["/app/server/index.mjs"]

################# The workers builder ##############

FROM builder AS workers_builder
WORKDIR /app/apps/workers
RUN pnpm build

################# The workers ##############

FROM $NODE AS workers
WORKDIR /app

ENV NODE_ENV production

COPY --from=workers_builder --chown=node:node /app/apps/workers/dist/index.js ./index.js
COPY --from=workers_builder --chown=node:node /app/apps/workers/package.json ./package.json

ARG SERVER_VERSION=nightly
ENV SERVER_VERSION=${SERVER_VERSION}

CMD ["/app/index.js"]

################# The migrator builder ##############

FROM builder AS migrator_builder
WORKDIR /app/apps/migrator
RUN pnpm build

################# The migrator ##############

FROM $NODE AS migrator
WORKDIR /app

COPY --from=migrator_builder --chown=node:node /app/apps/migrator/dist/index.js ./index.js
COPY --from=migrator_builder --chown=node:node /app/apps/migrator/package.json ./package.json
COPY --from=migrator_builder --chown=node:node /app/apps/migrator/node_modules/@plantuml/db/migrations ./migrations

ARG SERVER_VERSION=nightly
ENV SERVER_VERSION=${SERVER_VERSION}

CMD ["/app/index.js"]
