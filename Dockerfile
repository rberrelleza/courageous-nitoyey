# syntax = docker/dockerfile:experimental
FROM okteto/node:12
WORKDIR /usr/src/app
ENV NODE_ENV=CI
ENV YARN_CACHE_FOLDER=/root/.cache/yarn/v6

COPY package.json package.json
RUN --mount=type=cache,target=/root/.cache/yarn/v6 yarn install

COPY packages/client/package.json packages/client/package.json
COPY packages/dapplib/package.json packages/dapplib/package.json
COPY packages/server/package.json packages/server/package.json

COPY lerna.json lerna.json
RUN --mount=type=cache,target=/root/.cache/yarn/v6 yarn run lerna:install

COPY workspace/frame/package.json workspace/frame/package.json
RUN --mount=type=cache,target=/root/.cache/yarn/v6 yarn install

COPY . . 
RUN --mount=type=cache,target=/root/.cache/yarn/v6 yarn run lerna:build

CMD ["yarn", "start"]