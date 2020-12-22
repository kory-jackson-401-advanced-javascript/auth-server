# LAB - Class 11

## Project: Auth Server

### Author: Kory Jackson

### Links and Resources

- [ci/cd](http://xyz.com) (GitHub Actions)
- back-end server url: https://lab11auth.herokuapp.com/

### Setup

#### How to initialize/run your application (where applicable)

- Use the url up top in any http request (i.e. insomnia, httpie)
- use endpoint /signup to create a user
- use endpoint /signin to Log in as user


#### How to use your library (where applicable)

#### Tests

- do not have tests for application

# LAB - Class 13

## Project: Bearer Auth Server

### Author: Kory Jackson

### Links and Resources

- back-end server url: https://bearerauth.herokuapp.com/

### Setup

#### How to initialize/run your application (where applicable)

- Use the url up top in any http request (i.e. insomnia, httpie)
- use endpoint /signup to create a user
- use endpoint /signin to Log in as user and get your token
- Grab token and do a get to /secret with the auth headers set to that token and you should get a "Welcome, **user**"


#### How to use your library (where applicable)

#### Tests

- do not have tests for application

# LAB - Class 14

## Project: Role Select Auth Server

### Author: Kory Jackson

### Links and Resources

- back-end server url: https://accesscontrollab14.herokuapp.com/

### Setup

#### How to initialize/run your application (where applicable)

- Use the url up top in any http request (i.e. insomnia, httpie)
- use endpoint /signup to create a user with params( username, password and role(guest, admin, editor or author))
- use endpoint /signin to Log in as user and get your token
- Grab token and do a get, post, put or delete to /secret with the auth headers set to that token and you should get a "Welcome, **user**"


#### How to use your library (where applicable)

#### Tests

- do not have tests for application
