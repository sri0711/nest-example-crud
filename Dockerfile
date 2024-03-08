FROM node:hydrogen-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

# RUN if [ -e .env ]; then \
# 	cp .env /usr/src/app; \
# 	else if [ -e ./src/app/.env ]; then \
# 	cp ./src/app/.env /usr/src/app/src/app; \
# 	else \
# 	echo "skipping env copy because of not found the env file"; \
# 	fi

EXPOSE 3000
CMD ["sh", "-c", "npm run start:prod"]
