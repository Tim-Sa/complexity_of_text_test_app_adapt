FROM node:18 AS react
WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=react /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80