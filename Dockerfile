FROM node:12 AS builder

RUN apt-get update && \
  apt-get install --yes libglu1 && \
  apt-get clean && \
  rm -rf /var/cache/apt/archives

USER node
WORKDIR /tmp
COPY --chown=node:node . .

RUN npm install --no-audit && \
  npm run build

FROM nginx:1.17-alpine

ARG GIT_COMMIT
ARG VERSION

LABEL maintainer="Jeremie Rodriguez <contact@jeremierodriguez.com> (https://github.com/jeremiergz)" \
  description="Yet Another Resume Website. This time it's mine though." \
  git_commit=${GIT_COMMIT} \
  version=${VERSION}

WORKDIR /usr/share/nginx/html
COPY --from=builder --chown=nginx /tmp/public .

EXPOSE 80
