# base
FROM node:16.15-alpine3.15 AS base

RUN apk add --update --no-cache bash && \
    corepack enable

WORKDIR /app

RUN chown node:node /app

USER node
