/*
 * Title: Uptime monitoring application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Abdallah Daiyan (Developer Daiyan)
 * Date: 4/6/21
 */

// * dependencies
const http = require("http");

const { handleReqRes } = require("./helpers/handleRes");

// * app object - module scaffolding
const app = {};

// * config
app.config = {
  port: 3000,
};

// * handle request response
app.handleReqRes = handleReqRes;

// * create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port ${app.config.port}`);
  });
};

// * start the server
app.createServer();
