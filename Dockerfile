FROM okteto/node:12
WORKDIR /usr/src/app
COPY package.json package.json
COPY packages/client/package.json packages/client/package.json
COPY packages/dapplib/package.json packages/dapplib/package.json
COPY packages/server/package.json packages/server/package.json
COPY workspace/frame/package.json workspace/frame/package.json
RUN yarn install
COPY . . 
CMD ["yarn", "start"]