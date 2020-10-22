FROM okteto/node:12
WORKDIR /usr/src/app
COPY . . 
RUN yarn install
CMD ["yarn", "start"]