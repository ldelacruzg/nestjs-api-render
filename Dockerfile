FROM node:18-alpine
 
WORKDIR /user/src/app

COPY package*.json ./
COPY . .

ENV DATABASE_URL="postgres://bbdd_render_test_user:nSHhL9SWQ93XPBRlMNkbBW9ockfVl7rl@dpg-ch021d539el6kuhcdo8g-a.oregon-postgres.render.com/bbdd_render_test"

RUN npm install -g prisma
RUN npm install
# RUN npm ci --omit=dev
RUN npm run build
 
USER node
 
CMD ["npm", "run", "start:prod"]