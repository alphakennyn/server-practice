# server-practice

### Set up
#### Docker
Build docker image first

`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
`

Runs Docker container and runs NodeJS server
Run server


`docker-compose up`

Shuts down the Docker container and NodeJS server
`docker-compose down`

#### Install


```sh
# entering into docker container
docker exec -it server-practice_web_1 sh

# installing node modules
npm install
```

#### Test if working 
`localhost:3000/`

