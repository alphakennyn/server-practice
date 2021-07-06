# server-practice

### Set up
#### Docker
Build docker image first

`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
`

Run server

`docker-compose up`

#### Install

```sh
docker exec -it server-practice_web_1 sh
npm install
```

#### Test if working 
`localhost:3000/`