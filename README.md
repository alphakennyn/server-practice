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

---

### Before you start

- Use the urls defined in `src/constants/url.json`
- Get familiar with the structure of the project.
- Please use the tools installed in this project to keep this library as light as possible.

---
### Challenge 1
#### Infrastructure + GET endpoints
You're a new dev at company X. Your supervisor puts you in charge of an old legacy project with some issues. Your job is to patch of some of these.

- The exists an endpoint `/cats/fact` that should return a string of a random cat fact, but it's returning `{}`. Can you identify the problem?
The getCatFact function from `/repository/cats.js ` is an async function. When the function was getting called in `/routes/cats.js`, the callback in the `get` function was not wrapped in an async function.

- The `basic` manager (`src/manager/basic.js`) seems to be doing a lot. Can you extract some of the functions?
Yessir :D

- You can also get a whole bunch of schools from any country provided ex `/universities/canada`. However the client wants you to make a few changes to it.
    - Currently the result is a bunch of info that the client doesn't need. They only want a list of all the school `name` for a given country.
    - Can you add a proper error message if we get no result? You can use `The country provided doesn't exist or has no Universities. Please try again`

- Let's create a new endpoint! You're tasked to create endpoints that'll satisfy the following client's need
    - A comedian is running out of ideas for new jokes and asked your company to create a tool to get new jokes.
    - A crypto trade also comes at you expose an endpoint that gets the latest `BTC` price in `Euro`.

