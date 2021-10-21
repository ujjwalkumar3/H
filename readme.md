# My API

This is a simple API built on node.js with express framework, which stores the information of IPL team names and their captain's name.

## Installation

   Use the package manager npm to install dependencies.
  ```bash
    npm install express
    npm install nodemon
    npm install body-parser
    npm install swagger-ui-express
    npm install swagger-jsdoc
  ```
  Also for linting, documenting the code, and testing 'eslint', 'jsdoc', 'jest', and 'supertest' are used as development dependencies.
  ```bash
    npm install --save-dev eslint
    npm install --save-dev jsdoc
    npm install --save-dev jest
    npm install --save-dev supertest
  ```

## Features
  This API has following features  
  1. /Get  
     This request displays all the records stored in the playerRecords object.  
  2. /Post  
     This request add a new player record into the object.
