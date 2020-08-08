This is a repository for

Oowlish Challenge App
=====================

Instructions
-----------

For running in development
-----------

Requirements:

- node
- Docker

Compile the Docker images:

    $ docker-compose up -d --build

Run the containers:

    $ docker-compose up

**That's it!**

To run the apps (frontend and backend) independently:

The frontend:
   
    $ cd frontend
    $ npm start

The backend:
   
    $ cd backend
    $ npm start

For deploy (to Heroku - requires authentication)
-----------

    git push origin master

For running tests
-----------

In frontend:

    $ cd frontend
    $ npm test

In backend:

    $ cd backend
    $ npm test

