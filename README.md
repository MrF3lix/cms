# CMS
A lightweight content management system build with React, NodeJS and MongoDB

## Installation

The following things need to be installed beforehand

- NodeJS
- MongoDB

1. Clone the repository 
2. Run `npm install` in the root folder

## Start

1. Run `node index.js` in the root folder of the project to start the webserver. The site will run on `localhost:8081` and the api on `localhost:8080`
2. Register a user to access the CMS via `localhost:8081/register`
3. Login via `localhost:8081/login`

When developing I recomend using `npm start` to run a webpack-dev-server that reloads the page on any change. If you choose to do this keep in mind that the api still has to run in the background. You can do so with `node index.js`

## Credit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
