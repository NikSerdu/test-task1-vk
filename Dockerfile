FROM node as development

WORKDIR /usr/src/app
ARG VITE_SERVER_URL
ARG VITE_KINOPOISK_TOKEN

ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_KINOPOISK_TOKEN=$VITE_KINOPOISK_TOKEN


COPY package*.json .
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:stable-alpine as production

COPY --from=development /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]