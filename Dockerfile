# build environment
FROM node:10 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./frontend/package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY ./frontend /app
RUN npm run build

FROM node:10 as backend

RUN npm install pm2 -g

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./backend/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./backend .

# Copy frontend Build
COPY --from=build /app/build ./client

EXPOSE 3001:3001

CMD ["pm2-runtime", "server/server.js"]