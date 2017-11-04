# lets-recreate-express

Here, you are provided a barebones app that uses Express.

First, start the server by running `npm run dev` (which will run `nodemon server/index.js`). You can inspect the existing functionality by launching http://localhost:8542/ in your browser and interacting with the server's `/api/cats` endpoint with [Postman](https://www.getpostman.com/) (or cURL or some other similar tool).

Now, for the actual exercise: finish `/server/express.js` such that you can replace line 2 of `/server/index.js` with line 3.

Prerequisites:
* Knowledge of Node.js (eg, how to create an http server, handling requests, etc)
* Knowledge of Express.js (eg, how middleware works, its various methods like `app.use`, `app.get`, etc)

Major Goals:
* Challenge your knowledge of Node, Express, JavaScript, and coding in general by solving a problem you may not have seen before.

Minor Goals:
* Recognize that it's possible to make up a use case of a library _before_ you actually implement it. For example, it's very possible somebody creating a new library may write all of `/server/index.js` as is _before_ creating `express.js` for the very first time.
