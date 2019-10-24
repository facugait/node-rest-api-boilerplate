# node-rest-api

## Architectural Style

src
  └───application
  │   ├───controllers
  │   ├───middlewares
  │   └───routes
  └───index.js
  └───test

  `src/index.js`: File with all the settings and configurations to run our API<br/>
  `src/application/controllers`: Contains the code for our controllers<br/>
  `src/application/middlewares`: Contains the middlewares for our API<br/>
  `src/application/routes`: Contains the code with the API routing<br/>
  `src/test`: File with the code to test our API<br/>

  ## Stack used
- Node.js
- Express
- Moment
- Mocha
- Chai