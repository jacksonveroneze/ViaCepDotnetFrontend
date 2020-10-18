FROM node:12.7-alpine as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=node /app/dist/ViaCepDotnetFrontend /usr/share/nginx/html
