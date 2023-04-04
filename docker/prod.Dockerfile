# base
FROM node:16.15-alpine3.15 AS base

RUN apk add --update --no-cache bash && corepack enable

WORKDIR /app

# build
FROM base AS build

COPY package.json package-lock.json /app/

RUN npm install

COPY  . .

RUN npm run build

# production
FROM base

RUN npm install --location=global serve

COPY --from=build /app/build/ ./build/

CMD ["serve", "-s", "build"]
