# ---- Base Node ----
FROM node:18 AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY . ./
RUN npm run build

# ---- Release ----
FROM nginx:1.21.1-alpine AS release
COPY --from=build /app/dist /usr/share/nginx/html

# Copy and use custom nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]